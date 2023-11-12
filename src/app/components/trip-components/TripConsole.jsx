'use client'
import { Button } from "@nextui-org/react";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import StopsCard from "../../components/trip-components/StopsCard";
import PackListCard from "../../components/trip-components/PackListCard";
import { useState, useEffect } from "react";
import AddAccommodationsBtn from "../../components/trip-components/AddAccommodationsBtn";
import AddStopBtn from "../../components/trip-components/AddStopBtn";
import AddPackingListBtn from "../../components/trip-components/AddPackingListBtn";
import TripConsoleAddBtn from "../../components/trip-components/TripConsoleAddBtn"
import { createBrowserClient } from '@supabase/ssr'
// import Accommodation from "../../models/accommodation.js";



export default function TripConsole({ tripConsoleDetails }) {
  const [uuid, setUUID] = useState("");
  const [activeTab, setActiveTab] = useState("accommodations"); // Default active tab
  // console.log("trip console tripConsoleDetails:", tripConsoleDetails);
  // console.log("trip console tripConsoleDetails.accomIds:", tripConsoleDetails.accomIds);
  const tripId = tripConsoleDetails.tripId
  const accomIds = tripConsoleDetails.accomIds
  const stopIds = tripConsoleDetails.stopIds
  const packListIds = tripConsoleDetails.packListIds


  // SUPABASE GET/SET UUID
  useEffect(() => {
    const getUUID = async () => {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      );

      // Use Supabase to get the current user
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return <div className="flex gap-4 items-center">Not logged in</div>;
      }

      if (user) {
        setUUID(user.id);
      }
    };
    getUUID();
  }, []);
  

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // console.log("clicked on tab: ", tabId);
  };

  // Function to render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "accommodations":
        return accomIds && accomIds.length > 0
        ? accomIds.map((accomId, index) => (
              // <AccommodationsCard key={accomId || index} accomDetails={acc} />
              <AccommodationsCard key={accomId || index} />
            ))
          : <p className="font-thin italic text-gray-500"> Accommodations Empty</p>;
      case "stops":
        return stopIds && stopIds.length > 0
          ? stopIds.map((stopId) => (
              // <StopsCard key={stopId} stop={stopId} />
              <StopsCard key={stopId}/>
            ))
          : <p className="font-thin italic text-gray-500">Stops Empty</p>;
      case "packList":
        return packListIds && packListIds.length > 0
        ? packListIds.map((packListId) => (
            // <PackListCard key={packListId} packListId={packListId} />
            <PackListCard key={packListId} />
          ))
        : <p className="font-thin italic text-gray-500">Packing List Empty</p>;
      default:
        return null;
    }
  };


  const tabContent = renderTabContent();

  return (
    <div
      id="trip-controller-container"
      className="w-full row columns-2 flex justify-start items-start bg-gray-100 h-[800px] my-5"
    >
      <div
        id="details-tabs"
        className="w-[400px] m-2 columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full"
      >
        <div
          className="border rounded-2xl p-2 w-[400px] justify-between inline-flex"
          aria-label="Dynamic tabs"
        >
          {/* Accommodations Tab */}
          <Button
              className={`transition-opacity ${
                activeTab === "accommodations"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("accommodations")}
              aria-selected={activeTab === "accommodations"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Accommodations
            </Button>

          {/* Stops Tab */}
          <Button
              className={`transition-opacity ${
                activeTab === "stops"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("stops")}
              aria-selected={activeTab === "stops"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Stops
            </Button>

          {/* Packing List Tab */}
          <Button
              className={`transition-opacity ${
                activeTab === "packList"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("packList")}
              aria-selected={activeTab === "packList"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Packing List
            </Button>
        </div>
        {/* Tab Content */}
        <div className="py-3 h-full w-full flex flex-col justify-start items-center">
            <div className={`w-full flex flex-col justify-center items-center tab-content`}>
              <div className="w-full row flex flex-row justify-end">
                  <TripConsoleAddBtn activeTab={activeTab} uuid={uuid} tripId={tripId}/>
              </div>
              {tabContent}
            </div>
        </div>
      </div>
      <div id="details content" className="flex-grow bg-white h-full"></div>
    </div>
  );
}
