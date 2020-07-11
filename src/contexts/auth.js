import React, { createContext, useState, useEffect, useCallback } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [storageUser, setStorageUser, removeStorageUser] = useLocalStorage(
    "@authApp: user"
  );
  const [storageToken, setStorageToken, removeStorageToken] = useLocalStorage(
    "@authApp: token"
  );

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (storageUser && storageToken) {
      setUser(storageUser);
      // api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
    }
    setLoading(false);
  }, []);

  const signOut = useCallback(() => {
    setLoading(true);
    removeStorageUser();
    removeStorageToken();
    setUser({});
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!(user && user.name),
        user,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
