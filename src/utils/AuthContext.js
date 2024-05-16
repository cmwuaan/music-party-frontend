import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = (props) => {
  const [authUser, setAuthUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    console.log('object logged out');
    setAuthUser(null);
    setIsLoggedIn(false);
    console.log('logout success');
  };

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
    logOut,
    socket,
    setSocket,
  };

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
};
