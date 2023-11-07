"use client";
import LogOutFunction from "./log-out-csr";
import { Button } from "@nextui-org/react";

export default async function LogOutBtn() {
  const handleSignOut = async () => {
    LogOutFunction();
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
