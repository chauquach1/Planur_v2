"use client";
import { Button } from "@nextui-org/react";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import StopsCard from "../../components/trip-components/StopsCard";
import PackListCard from "../../components/trip-components/PackListCard";
import TripBanner from "../../components/trip-components/TripBanner";
import User from "../../models/user.js";
import { useState, useEffect } from "react";
import TabButton from "../../components/trip-components/TabButton";


export default async function TripDashboardLayout( {trip} ) {

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
        return trip.accommodations && trip.accommodations.length > 0
        ? trip.accommodations.map((acc, index) => (
              <AccommodationsCard key={acc._id || index} accommodation={acc} />
            ))
          : <p>No accommodations</p>;
      case "stops":
        return trip.stops && trip.stops.length > 0
          ? trip.stops.map((stop) => (
              <StopsCard key={stop._id} stop={stop} />
            ))
          : <p className="font-thin italic text-gray-500">Stops Empty</p>;
      case "packingLists":
        return trip.packLists && trip.packLists.length > 0
          ? trip.packLists.map((packList) => (
              <PackListCard key={packList._id} packList={packList} />
            ))
          : <p className="font-thin italic text-gray-500">Packing List Empty</p>;
      default:
        return null;
    }
  };

  const tabContent = renderTabContent();
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

  return (
    <div
      id="trip-controller-container"
      className="w-full row columns-2 flex justify-start items-start bg-gray-100 h-[800px] my-5"
    >
      <div
        id="details-tabs"
        className="w-[400px] m-2 columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
      >
        Tab Buttons
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
                activeTab === "packLists"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("packLists")}
              aria-selected={activeTab === "packLists"}
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
              {tabContent}
            </div>
            <div
              className={`tab-content ${activeTab === "stops" ? "" : "hidden"}`}
            >
              {tabContent}
            </div>
            <div
              className={`tab-content ${
                activeTab === "packLists" ? "" : "hidden"
              }`}
            >
              {tabContent}
            </div>
          </div>
      </div>
      <div id="details content" className="flex-grow bg-white h-full"></div>
    </div>
  );
}
