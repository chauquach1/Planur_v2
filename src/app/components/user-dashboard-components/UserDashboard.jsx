"use client";
import ContentController from "./panel-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect, useCallback } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [activeTab, setActiveTab] = useState("tripsindex");
  const [packList, setPackList] = useState(null);
  const [activeAccom, setActiveAccom] = useState(null);

  useEffect(() => {
    console.log('activeAccom', activeAccom);
  }, [activeAccom]);

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
      <TripDisplay
        trip={selectedTrip}
        key={selectedTrip._id || 0}
        packList={packList}
        setPackList={setPackList}
        activeAccom={activeAccom}
        setActiveAccom={setActiveAccom}
      />
      <SideContainer
        trip={selectedTrip}
        packList={packList}
        setPackList={setPackList}
        activeAccom={activeAccom}
      />
    </div>
  );
}
