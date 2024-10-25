"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { use, useState } from "react";
import { useFormStatus, useFormState } from "react-dom";
import { LogIn } from "../../lib/features/authentication/authactions";

export default function LogInModal({isOpen, onOpenChange}) {
  const [logInData, formAction] = useFormState(LogIn, null);
  const formStatus = useFormStatus();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Modal
        id="log-in-modal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="xs"
      >
        <ModalContent>
          {(onClose) => (
            <form action={formAction}>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Welcome Back!
              </ModalHeader>
              <ModalBody className="gap-4">
                <Input
                  label="Email"
                  variant="bordered"
                  size="sm"
                  name="email"
                />
                <Input
                  label="Password"
                  variant="bordered"
                  size="sm"
                  name="password"
                  endContent={
                    <button
                      className="focus:outline-none self-center"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <AiOutlineEyeInvisible className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <AiFillEye className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
              </ModalBody>
              <ModalFooter className="gap-4 items-center">
                <Button
                  color="primary"
                  onPress={onClose}
                  size="sm"
                  type="submit"
                  isDisabled={formStatus.pending}
                >
                  Log In
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
