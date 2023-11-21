"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import signUp from "./api/signUp";
// import {logIn} from "./api/logIn";
import { is } from "date-fns/locale";


const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

  const newMongoUser = async (data) => {
    try {
      const response = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error creating new user: ${response.status} - ${errorMessage}`);
      }
  
      const result = await response.json();
      console.log("result from POST request @ login:", result);
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., display an error message to the user
    }
  };

export default function Login() {
  // const secretKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const [isSignIn, setIsSignIn] = useState(true); // Default to login mode
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
    setIsSignIn((prevIsLogin) => !prevIsLogin); // Toggle between login and signup
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission


    if (isSignIn) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });
      
      if (data) {
        console.log('data:', data);
        router.refresh();
      } else if (error) {
        console.log("signInWIthEmailError:", error);
        router.refresh();
      }
      if (error) {
        console.log(error);
        router.refresh();
      } else {
        router.replace("/user", { scroll: false });
      }
    } else {
      // Handle sign up
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
          },
        },
      });
      if (data) {
        console.log("signUpWithEmail:", data);
        await newMongoUser(data);
        router.refresh();
      } else if (error) {
        console.log("signUpWithEmail:", error);
        router.refresh();
      }
      await newMongoUser(formData);
    }
  };

  return (
    <div className="container bg-white p-8 my-24 w-52 sm:w-80 text-center rounded-md shadow-lg">
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-left text-foreground"
        onSubmit={handleSubmit}
      >
        {!isSignIn ? (
          <div className="flex flex-col">
            <label id="firstName" className="text-md col-span-1" htmlFor="firstName">
              First Name
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 col-span-1"
              name="firstName"
              autoComplete="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <label id="lastName" className="text-md col-span-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6 col-span-1"
              name="lastName"
              autoComplete="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        ) : (
          null
        )}
        <label id="email" className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <label id="password" className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button
          id="submit button"
          type="submit"
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          {isSignIn ? "Log In" : "Sign Up"}
        </button>
      </form>
      <button
        onClick={toggleLoginMode}
        className="text-sm my-0 text-foreground"
      >
        {isSignIn ? "Switch to Sign Up" : "Switch to Log In"}
      </button>
    </div>
  );
}
