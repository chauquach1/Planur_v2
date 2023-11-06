'use client'
import { createBrowserClient } from '@supabase/ssr'
import { Button } from "@nextui-org/react"

export default async function Page() {

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  )

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    console.log("getSession onClick")
    console.log("session data success:", data)
    console.log("error: ", error)
  }
  const getUser = async () => {
    const { data, error } = await supabase.auth.getUser()
    console.log("getUser onClick")
    console.log("user data success:", data)
    console.log("error: ", error)
  }

  return (
    <div className="flex gap-4 items-center">
      <Button color='primary' size="md" onClick={getSession}>
        Get Session
      </Button>  
      <Button color='secondary' size="md" onClick={getUser}>
        Get User
      </Button>  
    </div>
  );
}
