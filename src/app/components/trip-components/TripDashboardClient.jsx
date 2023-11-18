"use client";
import { Button } from "@nextui-org/react";
import { BsCodeSlash } from "react-icons/bs";
import React, { useState, useCallback, useEffect } from "react";
import EditDetailsTrigger from "../panel-components/EditDetailsTrigger";
import TabButtonsContainer from "./TabButtonsContainer";
import AddAccommodationsBtn from "./AddAccommodationsBtn";
import AddStopBtn from "./AddStopBtn";
import AddPackingListBtn from "./AddPackingListBtn";
import AccommodationsTab from "./AccommodationsTab";
import PanelContainer from "../panel-components/PanelContainer";
import StopsTab from "./StopsTab";
import PackListsTab from "./PackListsTab";
import { set } from "date-fns";

export default function TripDashboardClient({ uuid, tripId }) {
  const [activeTab, setActiveTab] = useState("accommodations");
  const [currCardData, setCurrCardData] = useState(null);
  const [currCardType, setCurrCardType] = useState(null);
  const [prevCardData, setPrevCardData] = useState(null);
  const [prevCardType, setPrevCardType] = useState(null);
  const [accommodations, setAccommodations] = useState([]);
  const [stops, setStops] = useState([]);
  const [packList, setPackList] = useState(null);

  // FETCH REQUEST FUNCTIONS
  const getAccoms = useCallback(async () => {
    // logWithTimestamp("getAccoms called on dashboard");
    try {
      const response = await fetch(
        `http://localhost:3000/api/accommodations?tripId=${tripId}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      setAccommodations(data);
    } catch (error) {
      console.error(error);
    }
  }, [tripId]);

  const getTripStops = useCallback(async () => {
    // logWithTimestamp('getTripStops called on dashboard');
    try {
      const response = await fetch(
        `http://localhost:3000/api/stops?tripId=${tripId}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      setStops(data);
    } catch (error) {
      console.error(error);
    }
  }, [tripId]);

  const getPackList = useCallback(async () => {
    // logWithTimestamp('getPackList called on dashboard');
    try {
      const response = await fetch(
        `http://localhost:3000/api/packlist?tripId=${tripId}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }
      setPackList(data);
    } catch (error) {
      console.error(error);
    }
  }, [tripId]);

  const updateAccomCard = useCallback((newCardData) => {
    const updatedAccoms = accommodations.map((accom) => {
      if (accom._id === newCardData._id) {
        return newCardData; // Replace with new data
      }
      return accom; // Keep existing data
    });
  
    setAccommodations(updatedAccoms); // Update the accommodations state
  }, [accommodations])

  const updateStopCard = useCallback((newCardData) => {
    const updatedStops = stops.map((stop) => {
      if (stop._id === newCardData._id) {
        return newCardData; // Replace with new data
      }
      return stop; // Keep existing data
    });
  
    setStops(updatedStops); // Update the accommodations state
  }, [stops])

  // const updatePackList = useCallback((newCardData) => {
  //   const updatedAccoms = accommodations.map((accom) => {
  //     if (accom._id === newCardData._id) {
  //       return newCardData; // Replace with new data
  //     }
  //     return accom; // Keep existing data
  //   });
  
  //   setAccommodations(updatedAccoms); // Update the accommodations state
  // }, [accommodations])

  useEffect(() => {
    getAccoms();
    getTripStops();
    getPackList();
  }, [getAccoms, getTripStops, getPackList]);

  // Client-side logic
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleCardPress = (currCardData, currCardType) => {
    setCurrCardData(currCardData);
    setCurrCardType(currCardType);
    setPrevCardData(currCardData);
    setPrevCardType(currCardType);
  };

  const handleUpdateForm = (newCardData, newCardType) => {
    setCurrCardData(newCardData);
    setCurrCardType(newCardType);
    setPrevCardData(newCardData);
    setPrevCardType(newCardType);
    if (newCardType === "accommodations") {
      updateAccomCard(newCardData);
    } 
    
    if (newCardType === "stops") {
      updateStopCard(newCardData);
    } else if (newCardType === "packLists") {
      updatePackList(newCardData);
    }
  };

  const logData = () => {
    console.log(currCardData);
  };

  return (
    <>
      <div
        id="trip-controller-container"
        className="w-full shadow-2xl bg-gradient-to-tl bg-gray-600 rounded-xl row columns-2 flex justify-start items-star h-[800px] my-5"
      >
        <div
          id="details-tabs"
          className="w-full sm:max-w-xs sm:border-r border-gray-400 columns-1 rounded-l-lg flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
        >
          <div
            className=" sm: border-b p-0 sm:p-2 w-full sm:w-[300px] md:w-[400px] flex justify-between flex-wrap"
            aria-label="Dynamic tabs"
          >
            <TabButtonsContainer
              activeTab={activeTab}
              handleTabClick={handleTabClick}
            />
          </div>
          <div className="w-full h-full flex flex-col justify-start items-center gap-1 my-2 px-2">
            <div className="w-full max-w-xs row flex flex-row justify-start gap-1 px-2">
              <AddAccommodationsBtn uuid={uuid} tripId={tripId} />
              <AddStopBtn uuid={uuid} tripId={tripId} />
              <AddPackingListBtn uuid={uuid} tripId={tripId} />
              <Button
                isIconOnly
                size="lg"
                className="bg-white w-fit min-w-fit min-h-fit h-fit p-1"
                radius="full"
                onClick={logData}
              >
                <BsCodeSlash />
              </Button>
            </div>
            {activeTab === "accommodations" ? (
              <AccommodationsTab
                tripId={tripId}
                accommodations={accommodations}
                currCardData={currCardData}
                currCardType={currCardType}
                prevCardData={prevCardData}
                prevCardType={prevCardType}
                handleCardPress={handleCardPress}
                getAccoms={getAccoms}
                className=""
              />
            ) : activeTab === "stops" ? (
              <StopsTab
                tripId={tripId}
                stops={stops}
                currCardData={currCardData}
                currCardType={currCardType}
                prevCardData={prevCardData}
                prevCardType={prevCardType}
                getTripStops={getTripStops}
                handleCardPress={handleCardPress}
              />
            ) : activeTab === "packLists" ? (
              <PackListsTab
                tripId={tripId}
                packList={packList}
                currCardData={currCardData}
                currCardType={currCardType}
                prevCardData={prevCardData}
                prevCardType={prevCardType}
                getPackList={getPackList}
                handleCardPress={handleCardPress}
              />
            ) : (
              <p>Tab Empty</p>
            )}
          </div>
        </div>
        <div
          id="dashboard-panel-container"
          className="w-full bg-white/20 rounded-r-xl columns-1 sm:flex sm:p-2 flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
        >
          <div className="w-fit place-self-end h-fit">
            <EditDetailsTrigger
              uuid={uuid}
              tripId={tripId}
              currCardData={currCardData}
              currCardType={currCardType}
              handleUpdateForm={handleUpdateForm}
              updateStopCard={updateStopCard}
            />
          </div>
          <PanelContainer
            currCardData={currCardData}
            currCardType={currCardType}
          />
        </div>
      </div>
    </>
  );
}
