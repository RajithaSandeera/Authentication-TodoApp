import { ReactNode } from "react";
import { LoginFormValues } from "./login";

export interface AuthContextType {
  isAuthenticated: boolean;
  user: LoginFormValues | null;
  login: (userData: LoginFormValues) => void;
  logout: () => void;
}


export interface AuthProviderProps {
  children: ReactNode;
}