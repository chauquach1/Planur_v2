'use client'
import {useState} from 'react';
import AuthContext from './AuthContext';

export default function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => {
    setIsLoggedIn(true);
    console.log("Logged in, isLoggedIn:", true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
    console.log("Logged in, isLoggedIn:", false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}