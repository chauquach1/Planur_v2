// 'use client'
import { createBrowserClient } from "@supabase/ssr";
import GetSessionBtn from "../components/auth-components/GetSessionBtn";
import GetUserBtn from "../components/auth-components/GetUserBtn";

export default async function UserPage() {

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );


  return (
    <div className="flex gap-4 items-center">

    </div>
  );
}
