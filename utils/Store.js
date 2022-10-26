import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [match1, setMatch1] = useState({});
  const [match2, setMatch2] = useState({});
  const [match3, setMatch3] = useState({});
  const [password, setPassword] = useState("");


  return (
    <AuthContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        first,
        setFirst,
        second,
        setSecond,
        third,
        setThird,
        match1,
        setMatch1,
        match2,
        setMatch2,
        match3,
        setMatch3,
        password,
        setPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
