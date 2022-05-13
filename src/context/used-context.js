import { createContext, useContext, useState } from "react";

const UsedContext = createContext();

function UsedProvider(props) {
  const [user, setUser] = useState([]);

  return <UsedContext.Provider value={user} {...props}></UsedContext.Provider>;
}

function useUsed() {
  const context = useContext(UsedContext);
  if (typeof context === "undefined") {
    throw new Error("k co data");
  }
  return context;
}
export { UsedProvider, useUsed };
