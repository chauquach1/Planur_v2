import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()

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

  const { data, error } = await supabase.auth.getUser()


  if (error) {
    console.log('error getSession(): ', error);
    return (
      <div className="container bg-zinc-500">
        <h1>error getSession()</h1>
      </div>
    );
  } 
  
  if (data) {
    console.log(data);
    return (
      <div className="container bg-zinc-500">
        <h1>user page</h1>
      </div>
    );
  }
}
