import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../../components/Nav";
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ["latin"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Planur v2',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default async function RootLayout({ children }) {
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

  const user = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav user={user}/>
        <main className="flex min-h-screen flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
