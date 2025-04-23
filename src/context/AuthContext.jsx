import { createContext, useContext, useEffect, useState } from "react";
import { supabase, LinksArray } from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session?.user === null) {
          setUser(null);
        } else {
          setUser(session?.user);
        }
      }
    );
  
    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);
  
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
export const UseAuth = () => {
  return useContext(AuthContext);
};
