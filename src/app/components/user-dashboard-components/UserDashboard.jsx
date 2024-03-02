"use client";
import ContentController from "./panel-nav-components/ContentController";
import TripDisplay from "../trip-components/TripDisplay";
import SideContainer from "./content-side-components/SideContainer";
import { useState, useEffect, useCallback, useRef, use } from "react";

export default function UserDashboard({ userData, trips }) {
  const [tripsIndex, setTripsIndex] = useState(trips || []);
  const [selectedTrip, setSelectedTrip] = useState(trips[0] || null);
  const [controllerTab, setControllerTab] = useState("tripsindex");
  const [tripDisplayTab, setTripDisplayTab] = useState("Full Details");
  const [requestType, setRequestType] = useState("POST");
  const [accomsIndex, setAccomsIndex] = useState([]);
  const [activeAccom, setActiveAccom] = useState({});
  const [showAccomForm, setShowAccomForm] = useState(false);
  const [stopsIndex, setStopsIndex] = useState([]);
  const [activeStop, setActiveStop] = useState({});
  const [showStopForm, setShowStopForm] = useState(false);
  const [packList, setPackList] = useState(null);
  const [showPackListForm, setShowPackListForm] = useState(false);
  const [contactsIndex, setContactsIndex] = useState([]);
  const [activeContact, setActiveContact] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);

  
  useEffect(() => {
    console.log("Trips Index: ", tripsIndex);
  }, [tripsIndex]);

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
    tripId: selectedTrip._id,
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

  const stopProps = {
    stopsIndex: stopsIndex,
    activeStop: activeStop,
    showStopForm: showStopForm,
    setStopsIndex: setStopsIndex,
    setActiveStop: setActiveStop,
    setShowStopForm: setShowStopForm,
  }

  const packListProps = {
    packListId: selectedTrip.packList,
    packList: packList,
    showPackListForm: showPackListForm,
    setPackList: setPackList,
    setShowPackListForm: setShowPackListForm,
  };

  const emergencyContactsProps = {
    contactsIndex: contactsIndex,
    activeContact: activeContact,
    showContactForm: showContactForm,
    setContactsIndex: setContactsIndex,
    setActiveContact: setActiveContact,
    setShowContactForm: setShowContactForm,
  };

  return (
    <div className="flex flex-row h-screen ">
      <ContentController
        userData={userData}
        controllerTab={controllerTab}
        setControllerTab={setControllerTab}
        setSelectedTrip={setSelectedTrip}
        trips={tripsIndex}
        setTripsIndex={setTripsIndex}
        selectedTrip={selectedTrip}
      />
      <TripDisplay
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        accomProps={accomProps}
        stopProps={stopProps}
        packListProps={packListProps}
        emergencyContactsProps={emergencyContactsProps}
      />
      <SideContainer
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        accomProps={accomProps}
        stopProps={stopProps}
        packListProps={packListProps}
        emergencyContactsProps={emergencyContactsProps}
      />
    </div>
  );
}
