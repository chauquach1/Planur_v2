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
        size="sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Sign Up for Planur
              </ModalHeader>
              <form>
                <ModalBody className="gap-4">
                  <div className="inline-flex flex-wrap sm:flex-nowrap gap-4">
                    <Input
                      autoFocus
                      label="First Name"
                      variant="bordered"
                      size="sm"
                      name="firstName"
                    />
                    <Input label="Last Name" variant="bordered" size="sm" name="lastName" />
                  </div>
                  <Input label="Email" variant="bordered" size="sm" name="email"/>
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
                  <Input
                    label="Confirm Password"
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
                  <Button color="primary" onPress={onClose} size="sm">
                    Sign Up
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
