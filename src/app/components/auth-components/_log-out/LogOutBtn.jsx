"use client";
import LogOutFunction from "./log-out-csr";
import { Button } from "@nextui-org/react";

export default function LogOutBtn() {
  const handleSignOut = async () => {
    await LogOutFunction();
  };

  return (
    <>
      <Button
        color="secondary" size="md"
        onClick={handleSignOut}
      >
        Logout
      </Button>
    </>
  );
}
