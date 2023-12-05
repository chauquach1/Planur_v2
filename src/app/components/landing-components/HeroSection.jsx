import Traveler from "../../assets/traveler.svg"
import TravelSmart from "../../public/travelsmart.svg"
import Checklist from "../../public/checklist.svg";
import Dashboard from "../../public/dashboard.svg";
import LocationSearch from "../../public/locationsearch.svg";
import Airplane from "../../public/3918989.jpg"
import Image from "next/image";
export default function HeroSection() {
  return (
    <div
      id="hero-section"
      className="row flex flex-row sm:flex-col md:flex-row justify-between m-1 lg:mx-0 lg:my-0 px-5 py-0 lg:h-80"
    >
      <h1 className="font-bold hidden text-center sm:block md:hidden text-3xl ">
        Your Ultimate Travel Companion
      </h1>
      <div className="container flex flex-col sm:flex-row sm:w-full md:max-w-lg items-center sm:items-start text-center sm:text-start">
        <div className="container w-full flex flex-col my-auto sm:my-7 md:my-10 lg:my-auto">
          <h1 className="font-bold block text-center sm:hidden md:block text-3xl md:text-4xl lg:text-5xl xl:text-5xl">
            Your Ultimate Travel Companion
          </h1>
          <p className="hidden sm:block sm:text-center">
            Simplify your journey with Planur, designed for hassle-free travel
            planning. Planur simplifies your trip planning experience. Discover
            the joy of crafting your adventure with ease.
          </p>
        </div>
        <div className="flex max-w-[400px] sm:w-auto md:hidden w-full flex-row items-center justify-center">
          <Image
            src={Traveler}
            width={400}
            height={400}
            alt="Airplanes"
            style={{ objectFit: "contain" }}
            priority={true}
          />
        </div>
        <p className="block sm:hidden">
          Simplify your journey with Planur, designed for hassle-free travel
          planning. Discover the joy of crafting your adventure with ease.
        </p>
      </div>
      <div className="hidden md:flex w-2/3 flex-row md:items-center justify-center">
        <Image
          src={Traveler}
          width={400}
          height={400}
          alt="Airplanes"
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>
    </div>
  );
}
