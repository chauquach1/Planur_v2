"use client";
import {
  useDisclosure,
} from "@nextui-org/react";
import LogInModal from "./LogInModal";

export default function SignUpBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <button
        onClick={onOpen}
        className="text-sm mx-2"
      >
        Log In
      </button>
      <LogInModal 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
