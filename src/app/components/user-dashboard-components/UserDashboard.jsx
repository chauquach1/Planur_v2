"use client";
import ContentController from "./panel-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect, useCallback, use } from "react";

export default function UserDashboard({ userData, trips }) {
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [controllerTab, setControllerTab] = useState("tripsindex");
  const [tripDisplayTab, setTripDisplayTab] = useState("Full Details");
  const [requestType, setRequestType] = useState("POST");
  const [accomsIndex, setAccomsIndex] = useState([]);
  const [activeAccom, setActiveAccom] = useState({});
  const [showAccomForm, setShowAccomForm] = useState(false);
  const [packList, setPackList] = useState(null);

  const displayProps = {
    controllerTab: controllerTab,
    setControllerTab: setControllerTab,
    tripDisplayTab: tripDisplayTab,
    setTripDisplayTab: setTripDisplayTab,
    showAccomForm: showAccomForm,
    setShowAccomForm: setShowAccomForm,
  };

  const tripProps = {
    trip: selectedTrip,
    setTrip: setSelectedTrip, // Assuming you have a setter for selectedTrip
    trips: trips,
  };

  const requestProps = {
    requestType: requestType,
    setRequestType: setRequestType,
  };

  const accomProps = {
    accomsIndex: accomsIndex,
    setAccomsIndex: setAccomsIndex,
    activeAccom: activeAccom,
    setActiveAccom: setActiveAccom,
    showAccomForm: showAccomForm,
    setShowAccomForm: setShowAccomForm,
  };

  const packListProps = {
    packList: packList,
    setPackList: setPackList,
  };

  // useEffect(() => {
  //   console.log('TripDisplay activeAccom', activeAccom);
  // }, [activeAccom]);

  return (
    <div className="flex flex-row h-screen ">
      <ContentController
        userData={userData}
        controllerTab={controllerTab}
        setControllerTab={setControllerTab}
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

        
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        accomProps={accomProps}
        packListProps={packListProps}
      />
      <SideContainer
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        accomProps={accomProps}
        packListProps={packListProps}
      />
    </div>
  );
}
