"use client";
import React, { useState, useCallback, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState("accommodations");
  const [currCardData, setCurrCardData] = useState({});
  const [currCardType, setCurrCardType] = useState("no currCard type");
  const [prevCardData, setPrevCardData] = useState({});
  const [prevCardType, setPrevCardType] = useState("no prevCard type");
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

  return (
    <>
      <div
        id="trip-controller-container"
        className="w-full row columns-2 flex justify-start items-star h-[800px] my-5"
      >
        <div
          id="dashboard-controller-container"
          className="w-full sm:w-4/6 bg-gray-400 columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full p-2"
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
            <div className="w-full h-full flex flex-col justify-start items-center gap-1 my-2 px-2">
              <div className="w-full max-w-xs sm:max-w-[300px] md:max-w-[400px] row flex flex-row justify-start gap-1 px-2">
                <AddAccommodationsBtn uuid={uuid} tripId={tripId} />
                <AddStopBtn uuid={uuid} tripId={tripId} />
                <AddPackingListBtn uuid={uuid} tripId={tripId} />
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
                  className="hidden"
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
        </div>
        <AccomsPanel
          currCardData={currCardData}
          currCardType={currCardType}
          prevCardData={prevCardData}
          prevCardType={prevCardType}
        />
      </div>
    </>
  );
}
