"use client";

import { SignIn } from '@supabase/auth-ui-react';
import { createBrowserClient } from '@supabase/ssr'
import { redirect } from 'next/navigation';

export default function LogInForm() {

  const logIn = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      if (event === 'SIGNED_IN') {
        console.log('SIGNED_IN');
      }
      if (event === 'SIGNED_OUT') {
        console.log('SIGNED_OUT');
      }
    });

    if (error) {
      console.log(error);
      return redirect("/login?message=Could not authenticate user");
    } else {
      console.log(data);
      return redirect("/user");
    }
  };


  return (
    <>
      <form action={logIn}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-4">
            <div className="sm:col-span-6">
              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
