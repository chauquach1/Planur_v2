"use client";
import ContentController from "./panel-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect, useCallback, use } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [activeTab, setActiveTab] = useState("tripsindex");
  const [requestType, setRequestType] = useState("POST");
  const [accomsIndex, setAccomsIndex] = useState([]);
  const [activeAccom, setActiveAccom] = useState(null);
  const [packList, setPackList] = useState(null);

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
        requestType={requestType}
        setRequestType={setRequestType}
        packList={packList}
        setPackList={setPackList}
        accomsIndex={accomsIndex}
        setAccomsIndex={setAccomsIndex}
        activeAccom={activeAccom}
        setActiveAccom={setActiveAccom}
      />
      <SideContainer
        trip={selectedTrip}
        requestType={requestType}
        packList={packList}
        setPackList={setPackList}
        activeAccom={activeAccom}
      />
    </div>
  );
}
