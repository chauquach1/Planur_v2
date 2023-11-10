"use client";
const punycode = require("punycode/");
import { Button } from "@nextui-org/react";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import StopsCard from "../../components/trip-components/StopsCard";
import TripBanner from "../../components/trip-components/TripBanner";
import { useState, useEffect } from "react";
// import { DetailsTabs } from "../../components/trip-components/DetailsTabs"
import TabButton from "../../components/trip-components/TabButton";

export default function TripDashboardLayout( {trip} ) {
  console.log("tripDetails", trip);

  // console.log("trip", trip);
  // console.log('parentData', parentData);
  // console.log(trip._id);

  // const [activeTab, setActiveTab] = useState("accommodations"); // Default active tab

  // const trip = sampleTrip.trips[0];
  // console.log("accommodations", trip.accommodations);
  // console.log("stops", trip.stops);

  // Function to handle tab click
  // const handleTabClick = (tabId) => {
  //   setActiveTab(tabId);
  //   // console.log("clicked on tab: ", tabId);
  // };

  // Function to render tab content based on active tab
  // const renderTabContent = () => {
  //   switch (activeTab) {
  //     case "accommodations":
  //       if (!trip.accommodations) {
  //         return <p>No accommodations</p>;
  //       } else {
  //         return trip.accommodations.map((acc) => (
  //           <AccommodationsCard key={acc._id} accommodation={acc} />
  //         ));
  //       }
  //     case "stops":
  //       if (!trip.stops) {
  //         return <p>No stops</p>;
  //       } else {
  //         return trip.stops.map((stop) => (
  //           <StopsCard key={stop._id} stop={stop} />
  //         ));
  //       }
  //     case "packingLists":
  //       if (!trip.packLists) {
  //         return <p>No packing lists</p>;
  //       } else {
  //         return trip.packLists.map((packList) => (
  //           <StopsCard key={packList._id} packList={packList} />
  //         ));
  //       }
  //     default:
  //       return null;
  //   }
  // };

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
          {/* <Button
              className={`transition-opacity ${
                activeTab === "accommodations"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              // onClick={() => handleTabClick("accommodations")}
              aria-selected={activeTab === "accommodations"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Accommodations
            </Button> */}

          {/* Stops Tab */}
          {/* <Button
              className={`transition-opacity ${
                activeTab === "stops"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              // onClick={() => handleTabClick("stops")}
              aria-selected={activeTab === "stops"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Stops
            </Button> */}

          {/* Packing List Tab */}
          {/* <Button
              className={`transition-opacity ${
                activeTab === "packLists"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              // onClick={() => handleTabClick("packLists")}
              aria-selected={activeTab === "packLists"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Packing List
            </Button> */}
        </div>
        {/* Tab Content */}
        {/* <div className="py-3">
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
                activeTab === "packLists" ? "" : "hidden"
              }`}
            >
              {activeTab === "packLists" && renderTabContent()}
            </div>
          </div> */}
      </div>
      <div id="details content" className="flex-grow bg-white h-full"></div>
    </div>
  );
}
