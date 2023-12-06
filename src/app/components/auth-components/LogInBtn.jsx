"use client";
import {
  Button,
  useDisclosure,
} from "@nextui-org/react";
import LogInModal from "./LogInModal";

export default function SignUpBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        variant="light"
        className="font-semibold"
      >
        Log In
      </Button>
      <LogInModal 
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
}
