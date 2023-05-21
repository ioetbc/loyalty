import {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import Constants from "expo-constants";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: Constants.manifest?.extra?.iosClient,
    androidClientId: Constants.manifest?.extra?.androidlient,
    webClientId: Constants.manifest?.extra?.webClient,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {Authorization: `Bearer ${token}`},
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.log("error authenticating user", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>{JSON.stringify(userInfo)}</Text>
      <Button
        title="Sign in with Google"
        disabled={!request}
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
