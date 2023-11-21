"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useState, useContext } from "react";

export default function LogOutBtn() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
  
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      // console.log("Error logging out:", error.message);
    }
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
