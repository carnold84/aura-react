import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = props => {
  let [user, setUser] = useState(sessionStorage.getItem("aura"));

  const login = async data => {
    return new Promise(() => {
      setTimeout(() => {
        sessionStorage.setItem("aura", data);
        setUser(sessionStorage.getItem("aura"));
      }, 2000);
    }).then(() => {
      return true;
    });
  };

  const register = () => {};

  const logout = async () => {
    return new Promise(() => {
      setTimeout(() => {
        sessionStorage.removeItem("aura");
        setUser(sessionStorage.getItem("aura"));
        return true;
      }, 2000);
    }).then(() => {
      return true;
    });
  };

  console.log(user);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      {...props}
    />
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
