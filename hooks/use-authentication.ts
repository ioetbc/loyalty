import {useEffect, useContext} from "react";
import * as Google from "expo-auth-session/providers/google";
import {GoogleAuthProvider, getAuth, signInWithCredential} from "firebase/auth";
import Constants from "expo-constants";
import {AuthenticationContext} from "../context/auth-context";
import {
  collection,
  doc,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import {db} from "../firebase-config";
import {MERCHANT} from "../constants";

const auth = getAuth();

export function useAuthentication() {
  const {user, setUser} = useContext(AuthenticationContext);

  const [_, response, promptAsync] = Google.useAuthRequest({
    iosClientId: Constants.manifest?.extra?.iosClient,
    androidClientId: Constants.manifest?.extra?.androidClient,
    webClientId: Constants.manifest?.extra?.webClient,
  });

  useEffect(() => {
    if (response?.type === "success") {
      login(response.authentication.accessToken);
    }
  }, [response]);

  const login = async (accessToken: string) => {
    const credential = GoogleAuthProvider.credential(null, accessToken);
    const {user} = await signInWithCredential(auth, credential);

    try {
      const userDocRef = doc(db, "users", user.uid);

      await setDoc(userDocRef, {
        username: user.displayName,
        email: user.email,
      });

      const merchantDocRef = doc(collection(userDocRef, "merchants"), MERCHANT);

      await updateDoc(merchantDocRef, {
        count: increment(1),
      });

      console.log("Document written for user: ", user.uid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setUser(user);
  };

  return {user, promptAsync};
}
