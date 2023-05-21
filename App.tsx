import * as WebBrowser from "expo-web-browser";
import RootNavigation from "./navigation/root-navigation";
import {AuthProvider} from "./provider/auth-provider";

export default function App() {
  WebBrowser.maybeCompleteAuthSession();

  return (
    <AuthProvider>
      <RootNavigation />
    </AuthProvider>
  );
}
