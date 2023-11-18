'use client'
import { createBrowserClient } from "@supabase/ssr";
import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";


const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function SupabaseBtn() {
  const [sbsession, setSbsession] = useState(null);
  const [sbuser, setSbuser] = useState(null);


  useEffect(() => {

    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      if (error) {
      } else {
        setSbsession(data);
      }
    }

    const checkUser = async () => {
      const {data: { user }} = await supabase.auth.getUser();
      if (!user) {
      } else {
        setSbuser(user);
      }
    };

    checkSession();
    checkUser();

  }, []);


  const handleClick = () => {
  }

  return <Button auto size="mini" onClick={handleClick}> SupabaseBtn </Button>;
}
