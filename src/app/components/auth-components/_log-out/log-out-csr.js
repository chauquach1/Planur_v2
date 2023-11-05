"use client";

import { createBrowserClient } from "@supabase/ssr";

export default async function LogOutFunction() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { error } = await supabase.auth.signOut();
  
  if (error) {
    console.log('Error logging out:', error.message)
  } else {
    console.log("Logged out successfully");
  }
}
