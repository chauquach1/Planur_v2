"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function LogOutBtn({ supabase, setUserSignedIn }) {
  const router = useRouter();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    setUserSignedIn(false);
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
