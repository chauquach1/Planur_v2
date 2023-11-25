"use client";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import LogOutBtn from "./auth-components/LogOutBtn";
import { createBrowserClient } from "@supabase/ssr";

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function NavNextUI() {
  const [user, setUser] = useState(null);
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    // Function to fetch the current user
    const getCurrentUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data) {
        return null;
      } else if (data.session) {
        console.log("data @ getCurrentUser:", data.session.user);
        return data.session.user;
      }
    };

    // Check if a user is authenticated
    const checkAuthentication = async () => {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser); // Set the user if authenticated
        setUserSignedIn(true);
      }
    };

    checkAuthentication(); // Check user authentication status on component mount
  }, []);

  return (
    <Navbar shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit">Planur</p>
        </NavbarBrand>
      </NavbarContent>
      {userSignedIn ? (
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
      ) : null}
      <NavbarContent justify="end">
        {userSignedIn ? (
          <NavbarItem>
            <LogOutBtn supabase={supabase} setUserSignedIn={setUserSignedIn} />
          </NavbarItem>
        ) : (
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="/login"
              variant="flat"
              size="sm"
            >
              Sign Up/Log In
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
