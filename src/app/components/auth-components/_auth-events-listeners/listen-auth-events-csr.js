'use client';
import { createBrowserClient } from '@supabase/ssr';

export default function AuthEventListener() {

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  supabase.auth.onAuthStateChange((event, session) => {
    console.log(event, session);
    if (event === 'SIGNED_IN') {
      console.log('SIGNED_IN');
    }
    if (event === 'SIGNED_OUT') {
      console.log('SIGNED_OUT');
    }
  });
  
}