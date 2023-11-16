import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export default async function LogOutFunction () {

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.log('Error logging out:', error.message)
  } else {
    console.log("Logged out successfully");
  }
}