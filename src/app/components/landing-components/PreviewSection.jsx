import PreviewCard from "./PreviewCard";

const previewCardDetails = [
  {
    title: "Travel Smart",
    description:
      "Easily manage all your accommodations, from cozy B&Bs to luxury resorts.",
  },
  {
    title: "Journey Planner",
    description:
      "Craft itineraries that fit your style, perfect for every type of traveler.",
  },
  {
    title: "Packing List",
    description:
      "Quickly create personalized packing lists, from essentials to extras.",
  },
  {
    title: "Trip Dashboard",
    description: "Create, track and manage multiple trips seamlessly, all in one place."
  }
];

export default function PreviewSection() {
  return (
    <div id="preview-section" className="container flex flex-row sm:flex-col m-auto p-2 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-evenly gap-2 sm:gap-5 flex-wrap sm:flex-nowrap">
      {previewCardDetails.map((card, index) => (
        <PreviewCard key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
}