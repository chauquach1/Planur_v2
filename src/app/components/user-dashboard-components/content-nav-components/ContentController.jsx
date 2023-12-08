"use client";
import ContentNavCard from "./ContentNavCard";
import TripDisplay from "../../trip-components/TripDisplay";
import AllTripsTab from "../dashboard-nav-tabs/AllTripsTab"
import sampleTrips from "../../../_tests_/sampleTrips";
import { useState, useEffect } from "react";

export default function ContentController({ userData }) {
  const [selectedTrip, setSelectedTrip] = useState(sampleTrips[0] || null);
  useEffect(() => {
    console.log(selectedTrip);
  }
  , [selectedTrip]);


  return (
    <div className="flex flex-row gap-2 h-screen bg-black">
      <div className="flex flex-col w-[380px] bg-slate-200 rounded-r-xl">
        <div className=" text-center text-xl h-[100px] p-2">
          <h1 className="leading-tight">
            {userData.firstName} {userData.lastName}'s Planur
          </h1>
        </div>
        <h1 className="ml-3">Trips:</h1>
        <AllTripsTab
          sampleTrips={sampleTrips}
          setSelectedTrip={setSelectedTrip}
        />
      </div>

      <div
        id="content-container"
        className="column flex flex-col w-screen h-full rounded-r-none rounded-xl bg-gray-300 overscroll-y-hidden"
      >
        <div
          id="content-header"
          className="flex-row w-full h-16 bg-peach-500 rounded-tl-xl"
        >
          <h1>header</h1>
        </div>
        <div
          id="content-body"
          className="inline-flex flex-row h-full w-full overflow-y-hidden"
        >
          <div
            id="content-panel-main"
            className="grid-flow-col w-full md:basis-3/4 h-auto overflow-y-auto p-4"
          >
            <TripDisplay
              trip={selectedTrip}
              key={selectedTrip._id.oid}
            />
          </div>
          <div
            id="content-panel-side"
            className="hidden md:block md:basis-1/4 col-span-1 h-full bg-bismark-600"
          ></div>
        </div>
      </div>
    </div>
  );
}
