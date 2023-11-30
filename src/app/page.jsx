'use client'
import HeroSection from "./components/landing-components/HeroSection";
import FeaturesSection from "./components/landing-components/FeaturesSection";
import PreviewSection from "./components/landing-components/PreviewSection";
import SignUpBanner from "./components/landing-components/SignUpBanner";

export default async function Page() {
  return (
    <>
      <HeroSection />
      <PreviewSection />
      <SignUpBanner />
      <FeaturesSection />
    </>
  );
}
