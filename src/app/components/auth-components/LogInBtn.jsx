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
        className="font-semibold min-w-fit p-0 mx-3"
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
