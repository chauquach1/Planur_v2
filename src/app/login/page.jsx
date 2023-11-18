"use client";
import { createBrowserClient } from "@supabase/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import jwt from "jsonwebtoken";

export default function Login() {

  const secretKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLogin, setIsLogin] = useState(true); // Default to login mode
  
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: "chau268@gmail.com",
        password: "Statesnminds1!",
      });

      supabase.auth.onAuthStateChange((event, session) => {
        console.log('onAuthStateChange ',event, session);
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
        const jwtToken = jwt.sign({ sub: user.id }, secretKey);
        localStorage.setItem("jwtToken", jwtToken);
        router.replace("/user", { scroll: false });
      }
    } else {
      // Handle sign up
      const { user, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.log(error);
        router.refresh();
      } else {
        const jwtToken = jwt.sign({ sub: user.id }, secretKey);

        // Save the JWT token to localStorage for future use
        localStorage.setItem("jwtToken", jwtToken);

        router.replace("/user", { scroll: false });
      }
    }
  };

  return (
    <div className="container bg-white p-8 my-24 w-52 sm:w-80 text-center rounded-md shadow-lg">
      <form
        className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-left text-foreground"
        onSubmit={handleSubmit}
      >
        <label className="text-md" htmlFor="email">
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
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="password"
          autoComplete="password"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <button
          id="submit button"
          type="submit"
          className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
        >
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
      <button onClick={toggleLoginMode} className="text-sm my-0 text-foreground">
        {isLogin ? "Switch to Sign Up" : "Switch to Log In"}
      </button>
    </div>
  );
}
