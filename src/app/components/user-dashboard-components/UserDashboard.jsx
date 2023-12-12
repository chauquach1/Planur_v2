"use client";
import ContentController from "./content-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import { useState, useEffect } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [activeTab, setActiveTab] = useState("tripsindex");

  useEffect(() => {
    console.log("selectedTrip: ", selectedTrip);
  }, [selectedTrip]);

  return (
    <div className="flex flex-row gap-2 h-screen bg-black">
      <ContentController
        userData={userData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedTrip={setSelectedTrip}
        trips={trips}
        selectedTrip={selectedTrip}
      />

      <div
        id="content-container"
        className="column flex flex-col w-screen h-full rounded-r-none rounded-xl bg-gray-300 overscroll-y-hidden"
      >
        <div
          id="content-header"
          className="flex-row w-full h-16 bg-peach-500 rounded-tl-xl"
        >
          <h1>header</h1>
        </div>
        <div
          id="content-body"
          className="inline-flex flex-row h-full w-full overflow-y-hidden"
        >
          <div
            id="content-panel-main"
            className="grid-flow-col w-full md:basis-3/4 h-auto overflow-y-auto p-4"
          >
            <TripDisplay trip={selectedTrip} key={selectedTrip._id || 0} />
          </div>
          <div
            id="content-panel-side"
            className="hidden md:block md:basis-1/4 col-span-1 h-full bg-bismark-600"
          ></div>
        </div>
      </div>
    </div>
  );
}
