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

import { useState } from "react";

export default function SignUpModal({isOpen, onOpenChange}) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Modal
        id="sign-up-modal"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="xs"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Sign Up for Planur
              </ModalHeader>
              <ModalBody className="gap-4">
                <Input
                  autoFocus
                  label="First Name"
                  variant="bordered"
                  size="sm"
                />
                <Input
                  label="Last Name"
                  variant="bordered"
                  size="sm"
                />
                <Input
                  label="Email"
                  variant="bordered"
                  size="sm"
                />
                <Input
                  label="Password"
                  variant="bordered"
                  size="sm"
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
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  className="p-0 min-w-fit"
                  size="md"
                >
                  Close
                </Button>
                <Button color="primary" onPress={onClose} size="sm">
                  Sign Up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
