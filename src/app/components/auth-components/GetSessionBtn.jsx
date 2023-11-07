"use client";
import { createBrowserClient } from "@supabase/ssr";
import { Button } from "@nextui-org/react";

export default async function GetSessionBtn() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const getSession = async () => {
    console.log("getSession onClick");
    const { data, error } = await supabase.auth.getSession();
    console.log("session data success:", data);
    console.log("session error: ", error);
  };

  return (
    <Button color="primary" size="md" onPress={getSession}>
      Get Session
    </Button>
  );
}
