import {useContext} from "react";
import {AuthenticationContext} from "../context/auth-context";

import UserStack from "./user-stack";
import AuthStack from "./auth-stack";

export default function RootNavigation() {
  const {user} = useContext(AuthenticationContext);
  return user ? <UserStack /> : <AuthStack />;
}
