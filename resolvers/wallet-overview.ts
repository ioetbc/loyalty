import {collection, getDocs} from "firebase/firestore";

import {db} from "../firebase-config";
import type {Card} from "../types";

export const fetchWalletOverview = async ({userId}: {userId: string}) => {
  const querySnapshot = await getDocs(
    collection(db, "users", userId, "merchants")
  );
  const cards = [];
  querySnapshot.forEach((doc) => {
    cards.push({merchant: doc.id, ...doc.data()} as Card);
  });
  return cards;
};
