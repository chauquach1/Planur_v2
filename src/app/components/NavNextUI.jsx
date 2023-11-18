"use client";
import React, { useContext } from "react";
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
import AuthContext from "./context/AuthContext";

export default function NavNextUI() {
  const { isLoggedIn, logIn, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Planur</p>
        </NavbarBrand>
      </NavbarContent>
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
            <Button 
              onPress={() => console.log('isLoggedIn?', isLoggedIn)}
            />
        </NavbarItem>
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
        <NavbarItem>
          <LogOutBtn />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
