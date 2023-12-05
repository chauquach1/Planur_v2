import Image from "@nextui-org/react"
import PreviewCard from "./PreviewCard";
import TravelSmart from "../../assets/travelsmart.svg";
import Checklist from "../../assets/checklist.svg";
import Dashboard from "../../assets/dashboard.svg";
import LocationSearch from "../../assets/locationsearch.svg";

const previewCardDetails = [
  {
    title: "Travel Smart",
    description:
      "Easily manage all your accommodations, from cozy B&Bs to luxury resorts.",
    imgSrc: TravelSmart
  },
  {
    title: "Journey Planner",
    description:
      "Craft itineraries that fit your style, perfect for every type of traveler.",
    imgSrc: LocationSearch
  },
  {
    title: "Packing List",
    description:
      "Quickly create personalized packing lists, from essentials to extras.",
    imgSrc: Checklist
  },
  {
    title: "Trip Dashboard",
    description: "Create, track and manage multiple trips seamlessly, all in one place.",
    imgSrc: Dashboard
  }
];

export default function PreviewSection() {
  return (
    <div id="preview-section" className="w-full bg-slate-200 py-4 px-9">
      <div
        id="preview-cards-container"
        className="container flex flex-row items-center mx-auto align-center justify-center sm:flex-col sm:grid sm:text-center sm:grid-cols-2 lg:flex lg:flex-row lg:justify-evenly gap-2 flex-wrap md:flex-nowrap"
      >
        {previewCardDetails.map((card, index) => (
          <PreviewCard
            key={index}
            title={card.title}
            description={card.description}
            // imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}