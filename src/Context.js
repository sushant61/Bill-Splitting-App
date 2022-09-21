import { useContext, useEffect, useState } from "react";
import React from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [list, setList] = useState([]);
  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        setGroupName,
        setAmount,
        setLoginName,
        setPassword,
        setLogin,
        groupName,
        login,
        name,
        setName,
        amount,
        description,
        setDescription,
        list,
        loginName,
        password,
        setList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
