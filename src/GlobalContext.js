import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [gV, setGlobalVariable] = useState({
    loadingDuration: 500,
    gV1: "",
  });

  return (
    <GlobalContext.Provider value={{ gV, setGlobalVariable }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
