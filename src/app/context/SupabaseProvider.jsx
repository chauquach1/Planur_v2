// 'use client'
// import React, { useState, useEffect, useContext } from 'react';
// import SupabaseContext from './supbasecontext';
// import { createBrowserClient } from '@supabase/ssr';

// const supabase = createBrowserClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );

// export default function SupabaseProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkSession = async () => {
//       const { data: session, error } = await supabase.auth.getSession();

//       if (error) {
//         console.error('Error getting session:', error);
//       } else {
//         setUser(session?.user ?? null);
//       }
//     };

//     checkSession();

//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );

//     return () => {
//       authListener.unsubscribe();
//     };
//   }, []);

//   return (
//     <SupabaseContext.Provider value={{ user, supabase }}>
//       {children}
//     </SupabaseContext.Provider>
//   );
// };
