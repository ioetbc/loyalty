import React from "react";
import {Button, Text, View} from "react-native";
import {collection, addDoc} from "firebase/firestore";

import {db} from "../firebase-config";

export const Home = () => {
  const handleData = async () => {
    try {
      const docRef = await addDoc(
        collection(db, "merchant", "lumberjack", "user"),
        {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        }
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <View style={{backgroundColor: "blue", flex: 1}}>
      <Text>user logged in</Text>
      <Button title="Add data" onPress={handleData} />
    </View>
  );
};
