"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import TabButtonsContainer from "./TabButtonsContainer";
import AddAccommodationsBtn from "./AddAccommodationsBtn"
import AddStopBtn from "./AddStopBtn"
import AddPackingListBtn from "./AddPackingListBtn"
import StopsCard from "./StopsCard"


const DynamicAccommodationsTab = dynamic(() => import("./AccommodationsTab"),
  {loading: () => <p>Loading...</p>}
);

const DynamicStopsTab = dynamic(() => import("./StopsTab"),
  {loading: () => <p>Loading...</p>}
);

const DynamicPackingListTab = dynamic(() => import("./PackListsTab"),
  {loading: () => <p>Loading...</p>}
);

export default function TripDashboardClient({ uuid, tripId }) {
  const [activeTab, setActiveTab] = useState("accommodations");

  // // Client-side logic
  const handleTabClick = (tabName) => {
    console.log("tabName clicked", tabName);
    setActiveTab(tabName);
  };


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
              <TabButtonsContainer activeTab={activeTab} handleTabClick={handleTabClick}/>
            </div>
            <div className="w-full row flex flex-row justify-end gap-1 px-2 my-2">
              <AddAccommodationsBtn uuid={uuid} tripId={tripId}/>
              <AddStopBtn uuid={uuid} tripId={tripId}/>
              <AddPackingListBtn uuid={uuid} tripId={tripId}/>
            </div>
            <div className="w-full h-full border flex flex-col justify-start items-center gap-1 px-2">
              {activeTab === "accommodations" ? (
                <DynamicAccommodationsTab uuid={uuid} tripId={tripId} />
              ) : activeTab === "stops" ? (
                <DynamicStopsTab uuid={uuid} tripId={tripId} />
              ) : activeTab === "packLists" ? (
                <DynamicPackingListTab uuid={uuid} tripId={tripId} />
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
          <h1>Dashboard Panel Container</h1>
        </div>
      </div>
    </>
  );
}
