import Traveler from "../../assets/traveler.svg"
import Image from "next/image";
export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="row flex flex-row justify-between p-6 h-80"
    >
      <div className="flex flex-col pt-6 max-w-md">
        <h1 className="font-bold text-5xl">Your Ultimate Travel Companion</h1>
        <p>
          Simplify your journey with Planur, the app designed for hassle-free
          travel planning. Planur simplifies your trip planning experience.
          Discover the joy of crafting your adventure with ease.
        </p>
      </div>
      <div className="hidden lg:flex w-full flex-row items-center justify-end">
          <Image
            src={Traveler}
            width={500}
            height={500}
            alt="Airplanes"
            style={{ objectFit: "contain" }}
          />
      </div>
    </div>
  );
}
