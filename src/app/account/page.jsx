import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import AccountForm from './account-form'

export default async function Account() {
  const cookieStore = cookies()
  const supabase = createServerClient({ cookies: () => cookieStore })

  const {
    data: { session },
  } = await supabase.auth.getSession()
  
  if (!session) {
    return <div>no session</div>
  }

  if(session) {
    return <AccountForm session={session} />
  }
}