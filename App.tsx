import * as WebBrowser from "expo-web-browser";
import RootNavigation from "./navigation/root-navigation";
import {AuthProvider} from "./provider/auth-provider";

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  WebBrowser.maybeCompleteAuthSession();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RootNavigation />
      </AuthProvider>
    </QueryClientProvider>
  );
}
