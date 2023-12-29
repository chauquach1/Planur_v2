"use client";
import ContentController from "./panel-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [activeTab, setActiveTab] = useState("tripsindex");
  const [currPacklist, setCurrPacklist] = useState(null);

  // useEffect(() => {
  //   console.log("selectedTrip: ", selectedTrip.packList);
  // }, []);

  return (
    <div className="flex flex-row h-screen ">
      <ContentController
        userData={userData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setSelectedTrip={setSelectedTrip}
        trips={trips}
        selectedTrip={selectedTrip}
      />
      <TripDisplay trip={selectedTrip} key={selectedTrip._id || 0} />
      <SideContainer trip={selectedTrip} />
    </div>
  );
}
