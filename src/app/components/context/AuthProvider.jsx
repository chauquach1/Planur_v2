'use client'
import {useEffect, useState} from 'react';
import AuthContext from './AuthContext';
import { createBrowserClient } from '@supabase/ssr';

export default function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
    supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("event:", event);
        console.log("session:", session);
        if (event === "SIGNED_IN") {
          setIsLoggedIn(true);
          console.log("Logged in, isLoggedIn:", isLoggedIn);
        } else {
          setIsLoggedIn(false);
          console.log("Logged in, isLoggedIn:", isLoggedIn);
        }
      }
    );

  }, []);

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