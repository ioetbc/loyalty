import {createContext} from "react";
import {User} from "firebase/auth";

export const AuthenticationContext = createContext({
  user: null as User,
  setUser: (value: User) => {},
});
