import Image from "@nextui-org/react";
import PreviewCard from "./PreviewCard";
import TravelSmart from "../../public/travelsmart.svg";
import LocationSearch from "../../public/locationsearch.svg";
import Checklist from "../../public/checklist.svg";
import Dashboard from "../../public/dashboard.svg";

const previewCardDetails = [
  {
    title: "Trip Dashboard",
    description:
      "Create, track and manage multiple trips seamlessly, all in one place.",
    imgSrc: Dashboard,
  },
  {
    title: "Travel Smart",
    description:
      "Easily manage all your accommodations, from cozy B&Bs to luxury resorts.",
    imgSrc: TravelSmart,
  },
  {
    title: "Journey Planner",
    description:
      "Craft itineraries that fit your style, perfect for every type of traveler.",
    imgSrc: LocationSearch,
  },
  {
    title: "Packing List",
    description:
      "Quickly create personalized packing lists, from essentials to extras.",
    imgSrc: Checklist,
  },
];

export default function PreviewSection() {
  return (
    <div id="preview-section" className="w-full bg-slate-200 p-3 sm:py-4 sm:px-9">
      <div
        id="preview-cards-container"
        className="container flex flex-row items-center mx-auto align-center justify-center sm:flex-col sm:grid sm:text-center sm:grid-cols-2 lg:flex lg:flex-row lg:justify-evenly gap-2 flex-wrap md:flex-nowrap"
      >
        {previewCardDetails.map((card, index) => (
          <PreviewCard
            key={index}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}
