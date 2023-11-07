"use client";
import { createBrowserClient } from "@supabase/ssr";
import { Button } from "@nextui-org/react";

export default async function GetUserBtn() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const getUser = async () => {
    console.log("getUser onClick");
    const { data, error } = await supabase.auth.getUser();
    console.log("data.user.id success:", data);
    console.log("user.id error: ", error);
  };

  return (
    <Button color="secondary" size="md" onPress={getUser}>
      Get User
    </Button>
  );
}
