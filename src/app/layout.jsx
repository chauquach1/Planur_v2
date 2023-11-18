import React from "react";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "./globals.css";
import NavNextUI from "./components/NavNextUI";

const inter = Inter({ subsets: ["latin"] });

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Landing Page",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
            <main className="flex h-[1248px] min-w-full flex-col items-center">
              <NavNextUI />
              <div className="row flex flex-row w-1/3 justify-around">
                {/* <AuthModal /> */}
              </div>
              {children}
            </main>
        </Providers>
      </body>
    </html>
  );
}
