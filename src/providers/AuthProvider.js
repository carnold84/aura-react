import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = props => {
  let [user, setUser] = useState(JSON.parse(sessionStorage.getItem("aura")));

  console.log(JSON.parse(sessionStorage.getItem("aura")));

  const login = async data => {
    return new Promise(() => {
      setTimeout(() => {
        sessionStorage.setItem(
          "aura",
          JSON.stringify({
            email: data.email,
            firstName: "Sarah",
            id: "9asf9293lasd123da",
            imageUrl: "img/avatar.jpg",
            lastName: "Harris"
          })
        );
        setUser(JSON.parse(sessionStorage.getItem("aura")));
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
        setUser(JSON.parse(sessionStorage.getItem("aura")));
        return true;
      }, 2000);
    }).then(() => {
      return true;
    });
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      {...props}
    />
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
