"use client";
import React, { useState, useEffect } from "react";
import TabButtonsContainer from "./TabButtonsContainer";
import AddAccommodationsBtn from "./AddAccommodationsBtn"
import AddStopBtn from "./AddStopBtn"
import AddPackingListBtn from "./AddPackingListBtn"

export default function TripDashboardClient({ uuid, tripId }) {

  const [activeTab, setActiveTab] = useState("accommodations");

  // // Client-side logic
  const handleTabClick = (tabId) => {
    console.log("tabId clicked", tabId);
    setActiveTab(tabId);
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
              <TabButtonsContainer />
            </div>
            <div className="w-full row flex flex-row justify-end gap-1 px-2 my-2">
              <AddAccommodationsBtn uuid={uuid} tripId={tripId}/>
              <AddStopBtn uuid={uuid} tripId={tripId}/>
              <AddPackingListBtn />
            </div>
            <div className="w-full h-full bg-orange-200 flex flex-col justify-start items-center gap-1 px-2">
              <h1>Tab Content</h1>
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
