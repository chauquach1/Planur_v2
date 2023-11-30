import React from "react";
import { Inter } from "next/font/google";
import { Rubik } from "next/font/google";
import "./globals.css";
import NavNextUI from "./components/NavNextUI";
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
        <main className="flex min-h-screen min-w-full flex-col items-center">
          <NavNextUI />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
