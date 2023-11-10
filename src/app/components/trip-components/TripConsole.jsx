'use client'
const punycode = require("punycode/");
import { Button } from "@nextui-org/react";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import StopsCard from "../../components/trip-components/StopsCard";
import { useState, useEffect } from "react";
// import TabButton from "../../components/trip-components/TabButton";

export default function TripConsole({ trip }) {

  const [activeTab, setActiveTab] = useState("accommodations"); // Default active tab

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // console.log("clicked on tab: ", tabId);
  };

  // Function to render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "accommodations":
        if (trip.accommodations.length === 0) {
          return <p className="font-thin italic text-gray-500"> Accommodations Empty</p>;
        } else {
          return trip.accommodations.map((acc) => (
            <AccommodationsCard key={acc._id} accommodation={acc} />
          ));
        }
      case "stops":
        if (trip.stops.length === 0) {
          return <p className="font-thin italic text-gray-500">Stops Empty</p>;
        } else {
          return trip.stops.map((stop) => (
            <StopsCard key={stop._id} stop={stop} />
          ));
        }
      case "packList":
        if (!trip.packList || trip.packList.length === 0) {
          return <p className="font-thin italic text-gray-500">Packing List Empty</p>;
        } else {
          // Assume packList is an array and map over it
          return trip.packList.map((packList) => (
            <StopsCard key={packList._id} packList={packList} />
          ));
        }
      default:
        return null;
    }
  };

  return (
    <div
      id="trip-controller-container"
      className="w-full row columns-2 flex justify-start items-start bg-gray-100 h-[800px] my-5"
    >
      <div
        id="details-tabs"
        className="w-[400px] m-2 columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
      >
        <div
          className="border rounded-2xl p-2 w-[400px] justify-between inline-flex"
          aria-label="Dynamic tabs"
        >
          {/* Accommodations Tab */}
          <Button
              className={`transition-opacity ${
                activeTab === "accommodations"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("accommodations")}
              aria-selected={activeTab === "accommodations"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Accommodations
            </Button>

          {/* Stops Tab */}
          <Button
              className={`transition-opacity ${
                activeTab === "stops"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("stops")}
              aria-selected={activeTab === "stops"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Stops
            </Button>

          {/* Packing List Tab */}
          <Button
              className={`transition-opacity ${
                activeTab === "packList"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("packList")}
              aria-selected={activeTab === "packList"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Packing List
            </Button>
        </div>
        {/* Tab Content */}
        <div className="py-3">
            <div
              className={`tab-content ${
                activeTab === "accommodations" ? "" : "hidden"
              }`}
            >
              {activeTab === "accommodations" && renderTabContent()}
            </div>
            <div
              className={`tab-content ${activeTab === "stops" ? "" : "hidden"}`}
            >
              {activeTab === "stops" && renderTabContent()}
            </div>
            <div
              className={`tab-content ${
                activeTab === "packList" ? "" : "hidden"
              }`}
            >
              {activeTab === "packList" && renderTabContent()}
            </div>
          </div>
      </div>
      <div id="details content" className="flex-grow bg-white h-full"></div>
    </div>
  );
}

// let accommodations = {
//   id: "accommodations",
//   label: "Accommodations",
//   content: trip.accommodations.map((accommodation) => (
//     <AccommodationsCard
//       key={accommodation._id}
//       accommodation={accommodation}
//     />
//   )),
// };

// let stops = {
//   id: "stops",
//   label: "Stops",
//   content: trip.stops.map((stop) => <StopsCard key={stop._id} stop={stop} />),
// };

// let packingLists = {
//   id: "packLists",
//   label: "Packing List",
//   content: null,
// };
