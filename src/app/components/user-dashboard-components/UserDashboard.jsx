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
    tripDisplayTab: tripDisplayTab,
    showAccomForm: showAccomForm,
    setControllerTab: setControllerTab,
    setTripDisplayTab: setTripDisplayTab,
    setShowAccomForm: setShowAccomForm,
  };

  const tripProps = {
    selectedTrip: selectedTrip,
    trips: trips,
    setSelectedTrip: setSelectedTrip, // Assuming you have a setter for selectedTrip
  };

  const requestProps = {
    requestType: requestType,
    setRequestType: setRequestType,
  };

  const accomProps = {
    accomsIndex: accomsIndex,
    activeAccom: activeAccom,
    showAccomForm: showAccomForm,
    setAccomsIndex: setAccomsIndex,
    setActiveAccom: setActiveAccom,
    setShowAccomForm: setShowAccomForm,
  };

  const packListProps = {
    packListId: selectedTrip.packList,
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
