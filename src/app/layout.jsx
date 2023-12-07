import React from "react";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import Footer from "./components/landing-components/Footer";

const inter = Inter({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"], display: "swap" });

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
      <body className={rubik.className}>
        <main className="flex h-screen min-w-full flex-col justify-start items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
