"use client";
import React from "react";
import { createBrowserClient } from "@supabase/ssr";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { MailIcon } from "../public/MailIcon.jsx";
import { LockIcon } from "../public/LockIcon.jsx"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isLogin, setIsLogin] = useState(true); // Default to login mode

  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const toggleLoginMode = () => {
    setFormData({ email: "", password: "" }); // Reset form data
    setIsLogin((prevIsLogin) => !prevIsLogin); // Toggle between login and signup
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    if (isLogin) {
      // Handle login
      const { data, error } = await supabase.auth.signInWithPassword(formData);

      supabase.auth.onAuthStateChange((event, session) => {
        console.log(event, session);
        if (event === "SIGNED_IN") {
          console.log("SIGNED_IN");
        }
        if (event === "SIGNED_OUT") {
          console.log("SIGNED_OUT");
        }
      });

      if (error) {
        console.log(error);
        router.refresh();
      } else {
        console.log(data);
        // console.log("user uuid: ", data.user.id);
        router.replace("/user", { scroll: false });
      }
    } else {
      // Handle sign up
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${origin}/auth/callback`,
        },
      });

      if (error) {
        console.log(error);
        router.refresh();
      } else {
        console.log(data);
        router.replace("/user", { scroll: false });
      }
    }
  };

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Log In/Sign Up Modal
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          <>
            <form onSubmit={handleSubmit}>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  name="email"
                  autoFocus
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                  onChange={handleChange}
                  isRequired
                />
              </ModalBody>
              <ModalFooter>
                <Button type="submit" onPress={onOpenChange} color="primary" variant="flat">
                  {isLogin ? "Log In" : "Sign Up"}
                </Button>
              </ModalFooter>
            </form>
          </>
          <button
            onClick={toggleLoginMode}
            className="text-sm my-0 text-foreground"
          >
            {isLogin ? "Switch to Sign Up" : "Switch to Log In"}
          </button>
        </ModalContent>
      </Modal>
    </>
  );
}
