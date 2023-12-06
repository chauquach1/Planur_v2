"use client";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import SignUpModal from "./SignUpModal";

export default function SignUpBtn({variant, size}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        size={size}
        radius="full"
        className="bg-peach-400 text-white"
      >
        Sign Up
      </Button>
      <SignUpModal 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
