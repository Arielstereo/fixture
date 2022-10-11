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
  const [kids, setKids] = useState("");


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
        kids,
        setKids

      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
