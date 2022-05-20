import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [used, setUsed] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUsed({ displayName, email, uid, photoURL });
        setLoading(false);
        // navigate("/");
        return;
      }
      // navigate("/login");
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ used }}>
      {loading ? <span>loading...</span> : children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined") throw new Error("invalid auth context");
  return context;
}
export default AuthProvider;
