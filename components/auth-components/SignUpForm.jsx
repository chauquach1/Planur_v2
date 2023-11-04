import { NextResponse } from 'next/server'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { createContext } from 'react'
import { createBrowserClient } from '@supabase/ssr'


export default function SignUpForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  async function POST(request) {
    const requestUrl = new URL(request.url)
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      },
    })
  
    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    })
  }
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-4">
            <div className="mt-5 grid grid-cols-1 gap-x-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder="First Name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder="Last Name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

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
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={POST}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
    
}