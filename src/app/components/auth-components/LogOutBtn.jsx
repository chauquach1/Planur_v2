"use client";
import LogOutFunction from "../../libs/supabase/_log-out/log-out-csr";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function LogOutBtn() {
  const router = useRouter();

  const handleSignOut = async () => {
    await LogOutFunction();
    router.push("/");
  };

  return (
    <>
      <Button
        color="secondary"
        onClick={handleSignOut}
        size="sm"
        variant="flat"
      >
        Logout
      </Button>
    </>
  );
}
