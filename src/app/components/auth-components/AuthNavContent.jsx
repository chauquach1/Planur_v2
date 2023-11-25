"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogOutBtn from "./auth-components/LogOutBtn";
import { createBrowserClient } from "@supabase/ssr";
import { get } from "mongoose";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("user:", user);
  return user;
};

export default function AuthNavContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Store user information

  useEffect(() => {
    // Function to fetch the current user
    const getCurrentUser = async () => {
      const { data: user } = await supabase.auth.getUser();
      return user;
    };

    // Check if a user is authenticated
    const checkAuthentication = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser); // Set the user if authenticated
      }
    };

    checkAuthentication(); // Check user authentication status on component mount
  }, []);


  return (
    <>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/user">
            User
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/trips">
            Trips
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          {/* Conditional rendering based on user authentication */}
          {user ? (
            // User is authenticated, display user-specific content
            <>
              <p>Welcome, {user.email}</p>
              <LogOutBtn />
            </>
          ) : (
            // User is not authenticated, display login/signup button
            <Button
              as={Link}
              color="primary"
              href="/login"
              variant="flat"
              size="sm"
            >
              Sign Up/Log In
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </>
  );
}
