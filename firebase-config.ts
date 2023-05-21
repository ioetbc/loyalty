import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = {
  apiKey: Constants.manifest?.extra?.firebaseConfig?.apiKey,
  authDomain: Constants.manifest?.extra?.firebaseConfig?.authDomain,
  projectId: Constants.manifest?.extra?.firebaseConfig?.projectId,
  storageBucket: Constants.manifest?.extra?.firebaseConfig?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.firebaseConfig?.messageSenderId,
  appId: Constants.manifest?.extra?.firebaseConfig?.appId,
  measurementId: Constants.manifest?.extra?.firebaseConfig?.measurementId,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
