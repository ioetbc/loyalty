import React, {useContext} from "react";
import {Text, View} from "react-native";
import {useQuery} from "@tanstack/react-query";

import type {Card} from "../types";
import {AuthenticationContext} from "../context/auth-context";
import {fetchWalletOverview} from "../resolvers/wallet-overview";

export const Home = () => {
  const {user} = useContext(AuthenticationContext);
  console.log("user from gome component", user);
  const {data = []} = useQuery(["walletOverview"], () =>
    fetchWalletOverview({userId: user.uid})
  );

  return (
    <View style={{backgroundColor: "blue", flex: 1}}>
      <Text>{`${user.displayName} wallet`}</Text>
      {data.map((card: Card) => (
        <View key={card.merchant}>
          <Text>{card.merchant}</Text>
          <Text>{card.complete_cards}</Text>
        </View>
      ))}
    </View>
  );
};
