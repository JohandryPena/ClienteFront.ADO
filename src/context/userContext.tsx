import { createContext, useState, ReactNode } from "react";
import storage from "../helpers/storageServices";
import { User } from "../interfaces";

interface IUserContext {
  user: User | null;
  handleUser: (user: User) => void;
}

export const UserContext = createContext<IUserContext | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(storage.getItem("user", true));

  const handleUser = (newUser: User) => {
    setUser(newUser);
    storage.setItem("user", newUser, true);
  };

  const contextValue: IUserContext = {
    user,
    handleUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
