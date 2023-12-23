'use client'
import NavNextUI from "./components/NavNextUI";
import Footer from "./components/landing-components/Footer";
import HeroSection from "./components/landing-components/HeroSection";
import PreviewSection from "./components/landing-components/PreviewSection";
import SignUpBanner from "./components/landing-components/SignUpBanner";

export default async function Page() {
  return (
    <>
      <NavNextUI />
      <HeroSection />
      <PreviewSection />
      <SignUpBanner />
      <Footer />
    </>
  );
}
