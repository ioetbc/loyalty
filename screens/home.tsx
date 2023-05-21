import React, {useEffect, useState, useContext} from "react";
import {Button, Text, View} from "react-native";
import {
  collection,
  doc,
  increment,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import {db} from "../firebase-config";
import {AuthenticationContext} from "../context/auth-context";
import type {Card} from "../types";
import {MERCHANT} from "../constants";

export const Home = () => {
  const {user} = useContext(AuthenticationContext);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const userDocRef = doc(db, "users", user.uid);
    const merchantCollectionRef = collection(userDocRef, "merchants");

    const unsubscribe = onSnapshot(merchantCollectionRef, (snapshot) => {
      const fetchedCards: Card[] = snapshot.docs.map(
        (doc) => ({merchant: doc.id, ...doc.data()} as Card)
      );
      setCards(fetchedCards);
    });

    return () => unsubscribe();
  }, [user.uid]);

  const handleStamp = async () => {
    const userDocRef = doc(db, "users", user.uid);
    const merchantDocRef = doc(collection(userDocRef, "merchants"), MERCHANT);

    try {
      await updateDoc(merchantDocRef, {
        count: increment(1),
      });
    } catch (e) {
      console.log("error updating document", e);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Text>{`${user.displayName} wallet`}</Text>
      {cards.map((card: Card) => (
        <View key={card.merchant}>
          <Text>merchant {card.merchant}</Text>
          <Text>count {card.count}</Text>
          {/* <Text>number of cards complete {complete}</Text> */}
          <Button title="add stamp" onPress={handleStamp}></Button>
        </View>
      ))}
    </View>
  );
};
