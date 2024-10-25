"use client";
import { redirect } from 'next/navigation'
import { createBrowserClient } from '@supabase/ssr'

export async function LogIn(prevState, formData) {

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (error) {
    console.log("signInWIthEmailError:", error);
  }

  if (data) {
    redirect('/user', 'push')
  }
}