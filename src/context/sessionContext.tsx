import { createContext, useState, ReactNode } from "react";
import storage from "../helpers/storageServices";

interface ISession {
  token: string;
}

interface ISessionContext {
  session: ISession | null;
  handleSession: (session: ISession) => void;
  logout: () => void;
}

export const SessionContext = createContext<ISessionContext | null>(null);

interface SessionProviderProps {
  children: ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [session, setSession] = useState<ISession | null>(
    storage.getItem("session", true)
  );

  const handleSession = (newSession: ISession) => {
    setSession(newSession);
    storage.setItem("session", newSession, true);
  };

  const logout = () => {
    setSession(null);
    storage.clearStorage();
  };

  const contextValue: ISessionContext = {
    session,
    handleSession,
    logout,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
};
