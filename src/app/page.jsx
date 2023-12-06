'use client'
import HeroSection from "./components/landing-components/HeroSection";
import PreviewSection from "./components/landing-components/PreviewSection";
import SignUpBanner from "./components/landing-components/SignUpBanner";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <PreviewSection />
      <SignUpBanner />
    </>
  );
}
