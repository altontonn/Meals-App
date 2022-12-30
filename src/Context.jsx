import React, {useContext} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="Hello world">{children}</AppContext.Provider>
  );
};


export const useGlobalContext = () => {
  return useContext(AppContext);
}
export {AppContext, AppProvider}