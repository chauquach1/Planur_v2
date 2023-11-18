"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function LogOutBtn() {
  const { isLoggedIn, logIn, logOut } = useContext(AuthContext);
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      console.log("Error logging out:", error.message);
    }
    logOut();
    router.push("/");
  };

  return (
    <>
      <Button
        color="secondary"
        onPress={handleSignOut}
        size="sm"
        variant="flat"
      >
        Logout
      </Button>
    </>
  );
}
