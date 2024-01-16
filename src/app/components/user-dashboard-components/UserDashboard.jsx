"use client";
import ContentController from "./panel-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect, useCallback } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [activeTab, setActiveTab] = useState("tripsindex");
  const [accomsIdIndex, setAccomsIdIndex] = useState([]);
  const [accomsIndex, setAccomsIndex] = useState([]);
  const [packList, setPackList] = useState(null);
  const [activeAccom, setActiveAccom] = useState(null);
  
  useEffect(() => {
    if (selectedTrip && selectedTrip.accommodations && selectedTrip.accommodations.length > 0) {
      console.log("selectedTrip.accommodations", selectedTrip.accommodations);
      setAccomsIdIndex(selectedTrip.accommodations);
    }
  }, [selectedTrip]);

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
        accomsIdIndex={accomsIdIndex}
        setAccomsIdIndex={setAccomsIdIndex}
        accomsIndex={accomsIndex}
        setAccomsIndex={setAccomsIndex}
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
