"use client";
import React, { useState, useCallback } from "react";
import TabButtonsContainer from "./TabButtonsContainer";
import AddAccommodationsBtn from "./AddAccommodationsBtn";
import AddStopBtn from "./AddStopBtn";
import AddPackingListBtn from "./AddPackingListBtn";
import AccommodationsTab from "./AccommodationsTab";
import AccomsPanel from "../panel-components/AccomsPanel";
import StopsTab from "./StopsTab";
import PackListsTab from "./PackListsTab";
import { set } from "date-fns";

function logWithTimestamp(...messages) {
  console.log(new Date().toISOString(), ...messages);
}

export default function TripDashboardClient({ uuid, tripId }) {
  const [activeTab, setActiveTab] = useState('accommodations');
  const [panelType, setPanelType] = useState('no panel type');
  const [currCardId, setCurrCardId] = useState('no currCard id');
  const [prevCardId, setPrevCardId] = useState('no prevCard id');
  const [currCardData, setCurrCardData] = useState({});
  const [currCardType, setCurrCardType] = useState('no currCard type');
  const [prevCardData, setPrevCardData] = useState({});
  const [prevCardType, setPrevCardType] = useState('no prevCard type');
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
  
  const initialFetch = useCallback(async () => {
  }, []);
  // Client-side logic
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

// HANDLE CARD PRESS V2
  const handleCardPress = (currCardData, currCardType, prevCardData, prevCardType) => {
    setCurrCardData(currCardData)
    setCurrCardType(currCardType)
    if ((currCardData === prevCardData)) {
      console.log('currCardData and prevCardData are the same');
      return 
    } else if ((currCardType === prevCardType) && (currCardData !== prevCardData)) {
      console.log('types same, currCardData and prevCardData are different');
      setPrevCardData(currCardData)
      setPrevCardType(currCardType)
    } else {
      console.log('types diff, data diff');
      setPanelType(currCardType)
      setPrevCardData(currCardData);
      setPrevCardType(currCardType);
    }
  }

// HANDLE CARD PRESS V3
  // const handleCardPress = (currCardData, currCardType, prevCardData, prevCardType) => {
  //   console.log('panelType before', panelType);
  //   console.log('prevCardType before:', prevCardType,'prevCardData before', prevCardData);
  //   console.log('currCardType before:', currCardType,'currCardData before', currCardData);
  //   setPrevCardData(currCardData);
  //   setPrevCardType(currCardType);
  //   setCurrCardData(currCardData);
  //   setCurrCardType(currCardType);
  //   setPanelType(currCardType);
  // }

  return (
    <>
      <div
        id="trip-controller-container"
        className="w-full row columns-2 flex justify-start items-start bg-purple-200 h-[800px] my-5"
      >
        <div
          id="dashboard-controller-container"
          className="w-full sm:w-4/6 bg-blue-300 columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full p-2"
        >
          <div
            id="details-tabs"
            className="w-full columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
          >
            <div
              className="sm:border rounded-2xl p-0 sm:p-2 w-full sm:w-[300px] md:w-[400px] flex justify-between flex-wrap"
              aria-label="Dynamic tabs"
            >
              <TabButtonsContainer
                activeTab={activeTab}
                handleTabClick={handleTabClick}
              />
            </div>
            <div className="w-full row flex flex-row justify-end gap-1 px-2 my-2">
              <AddAccommodationsBtn uuid={uuid} tripId={tripId} />
              <AddStopBtn uuid={uuid} tripId={tripId} />
              <AddPackingListBtn uuid={uuid} tripId={tripId} />
            </div>
            <div className="w-full h-full border flex flex-col justify-start items-center gap-1 px-2">
              {activeTab === "accommodations" ? (
                <AccommodationsTab
                  tripId={tripId}
                  accommodations={accommodations}
                  panelType={panelType}
                  currCardData={currCardData}
                  currCardType={currCardType}
                  prevCardData={prevCardData}
                  prevCardType={prevCardType}
                  handleCardPress={handleCardPress}
                  getAccoms={getAccoms}
                  className='hidden'
                />
              ) : activeTab === "stops" ? (
                <StopsTab
                  tripId={tripId}
                  stops={stops}
                  panelType={panelType}
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
                  panelType={panelType}
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
        </div>
        <div
          id="dashboard-panel-container"
          className="hidden w-full bg-green-300 columns-1 sm:flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
        >
          <AccomsPanel 
            panelType={panelType}
            currCardData={currCardData}
            currCardType={currCardType}
            prevCardData={prevCardData}
            prevCardType={prevCardType}
          />
        </div>
      </div>
    </>
  );
}
