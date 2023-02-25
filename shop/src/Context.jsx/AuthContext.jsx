import { createContext, useState } from "react";
//c-p-c
export const Authcontext = createContext();
const AuthcontextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [Gdata, setGData] = useState([]);
  const [page, setPage] = useState(1);
  const [Item, setItem] = useState([]);
  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };

  console.log(Gdata, "hello i am from ");
  return (
    <Authcontext.Provider
      value={{
        isAuth,
        login,
        logout,
        setGData,
        Gdata,
        page,
        setPage,
        Item,
        setItem,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
export default AuthcontextProvider;
