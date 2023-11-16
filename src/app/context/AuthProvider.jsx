'use client'
import React, { useState, useEffect, createContext } from 'react';
import { createBrowserClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Create context
const SupabaseMongoContext = createContext({ supabaseUser: null, mongoUser: null });

export const AuthProvider = ({ children }) => {
  const [supabaseUser, setSupabaseUser] = useState(null);
  const [mongoUser, setMongoUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      // Retrieve user session from Supabase
      const { data: session } = await supabase.auth.getSession();
      setSupabaseUser(session?.user ?? null);

      if (session?.user) {
        // Fetch user data from MongoDB using userEmail
        try {
          const response = await fetch(`/api/mongoUser?email=${user.email}`);
          if (!response.ok) {
            throw new Error("Failed to fetch user from MongoDB");
          }
          const userData = await response.json();
          setMongoUser(userData);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    };

    checkUser();

    // Listen for authentication changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSupabaseUser(session?.user ?? null);
        // Repeat MongoDB fetching logic here as needed
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  return (
    <SupabaseMongoContext.Provider value={{ supabaseUser, mongoUser }}>
      {children}
    </SupabaseMongoContext.Provider>
  );
};

export default AuthProvider;
