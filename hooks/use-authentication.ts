import {useEffect, useContext} from "react";
import * as Google from "expo-auth-session/providers/google";
import {GoogleAuthProvider, getAuth, signInWithCredential} from "firebase/auth";
import Constants from "expo-constants";
import {AuthenticationContext} from "../context/auth-context";

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
    setUser(user);
  };

  return {user, promptAsync};
}
