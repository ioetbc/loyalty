import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {useAuthentication} from "../hooks/use-authentication";

export const Login = () => {
  const {promptAsync} = useAuthentication();

  return (
    <View style={styles.container}>
      <Text>login</Text>
      <View style={styles.controls}>
        <Button title="Sign in with Google" onPress={() => promptAsync()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  controls: {
    flex: 1,
  },
});
