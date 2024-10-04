"use client";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import SignUpModal from "./SignUpModal";

export default function SignUpBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        variant="light"
        size="sm"
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
