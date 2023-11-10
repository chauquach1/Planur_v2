"use client";
const punycode = require("punycode/");
import { Button } from "@nextui-org/react";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import StopsCard from "../../components/trip-components/StopsCard";
import TripBanner from "../../components/trip-components/TripBanner";
import { useState, useEffect } from "react";
// const getTripDetails = async (tripId) => {
//   const response = await fetch(`http://localhost:3000/api/trip/${tripId}`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }

//   const tripDetailsMongo = await response.json();
//   return tripDetailsMongo;
//   // console.log(trip);
// };

const sampleTrip = {
  _id: "654d66c715835f8a51afd58f",
  firstName: "Chau Quach",
  lastName: "Quach",
  trips: [
    {
      accommodations: [
        {
          name: "Marriott Tokyo",
          type: "Hotel",
          checkIn: "2024-01-03",
          checkOut: "2024-01-20",
          address:
            "TOKYO MIDTOWN 9-7-1 AKASAKA MINATO-KU, TOKYO, JAPAN, 107-6245",
          phoneNumber: "8589223709",
          email: "chau268@gmail.com",
          resNum: "30498573029475",
          _id: "654d68e615835f8a51afd59b",
          createdAt: "1699571942747",
          updatedAt: "1699571942747",
          __v: 0,
        },
        {
          name: "Halekulani Okinawa",
          type: "Hotel Resort",
          checkIn: "2024-01-20",
          checkOut: "2024-02-05",
          address:
            "1967-1 Nakama, Onna, Kunigami District, Okinawa 904-0401, Japan",
          phoneNumber: "+81 98-953-8600",
          email: "chauquach.pvt@gmail.com",
          resNum: "58293457",
          _id: "654d693b15835f8a51afd5a4",
          createdAt: "1699572027363",
          updatedAt: "1699572027363",
          __v: 0,
        },
      ],
      address: "TOKYO MIDTOWN 9-7-1 AKASAKA MINATO-KU, TOKYO, JAPAN, 107-6245",
      destination: "Tokyo, Japan",
      startDate: "2024-01-03",
      endDate: "2024-02-04",
      guests: "5",
      stops: [
        {
          stopName: "Grandma's House",
          address: "10895 Vereda Sol Del Dios, San Diego, CA 92130",
          arrival: "2024-01-07",
          departure: "2024-01-11",
          type: "House",
          transportation: "Mixed",
          interest: "Must-Go",
          resNum: "",
          notes: "Call grandma before entering",
          _id: "654d696a15835f8a51afd5af",
          createdAt: "1699572074353",
          updatedAt: "1699572074353",
          __v: 0,
        },
        {
          stopName: "Erin's House",
          address: "717 Merit Dr, San Marcos CA 92078",
          arrival: "2024-01-26",
          departure: "2024-02-02",
          type: "House",
          transportation: "Mixed",
          interest: "Must-Go",
          resNum: "",
          notes: "Gate Code: 2002",
          _id: "654d699f15835f8a51afd5bc",
          createdAt: "1699572127960",
          updatedAt: "1699572127960",
          __v: 0,
        },
      ],
      reason: "Vacation",
      transportation: "Mixed",
      tripName: "Tokyo 2024",
      _id: "654d66f215835f8a51afd592",
      createdAt: "1699571442898",
      updatedAt: "1699572143301",
      __v: 0,
      packLists: {
        clothes: {
          shirts: true,
          pants: true,
          shorts: true,
          sweater: true,
          underwear: true,
        },
        luggage: {
          backpack: true,
          carryon: true,
          dufflebag: true,
          suitcase: true,
          garmentbag: true,
        },
        toiletries: {
          toothbrush: true,
          toothpaste: true,
          shampoo: true,
          conditioner: true,
        },
      },
    },
  ],
};

export default function TripDashboard({ children, params }) {
  const [activeTab, setActiveTab] = useState("accommodations"); // Default active tab

  const trip = sampleTrip.trips[0];
  // console.log("accommodations", trip.accommodations);
  // console.log("stops", trip.stops);

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    console.log("clicked on tab: ", tabId);
  };


  // Function to render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "accommodations":
        return trip.accommodations.map((acc) => (
          <AccommodationsCard key={acc._id} accommodation={acc} />
        ));
      case "stops":
        return trip.stops.map((stop) => (
          <StopsCard key={stop._id} stop={stop} />
        ));
      case "packingLists":
        // Assuming packLists is an array in your trip object
        return trip.packLists.map((packList) => (
          <StopsCard key={packList._id} packList={packList} />
        ));
      default:
        return null;
    }
  };

  let accommodations = {
    id: "accommodations",
    label: "Accommodations",
    content: trip.accommodations.map((accommodation) => (
      <AccommodationsCard
        key={accommodation._id}
        accommodation={accommodation}
      />
    )),
  };

  let stops = {
    id: "stops",
    label: "Stops",
    content: trip.stops.map((stop) => <StopsCard key={stop._id} stop={stop} />),
  };

  let packingLists = {
    id: "packLists",
    label: "Packing List",
    content: null,
  };

  return (
    <div className="columns-1 flex flex-col w-full h-fit text-center items-center justify-center">
      <TripBanner />
      <div
        id="trip-controller-container"
        className="w-full row columns-2 flex justify-start items-start bg-gray-100 h-[800px] my-5"
      >
        <div id="details-tabs" className="w-[400px] m-2 columns-1 flex flex-col justify-start text-start max-h-fit overflow-scroll items-center h-full">
          {/* Tab Buttons */}
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
                activeTab === "packLists"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handleTabClick("packLists")}
              aria-selected={activeTab === "packLists"}
              role="tab"
              type="button"
              size="sm"
              radius="lg"
            >
              Packing List
            </Button>
          </div>

          {/* Tab Content */}
          <div className="py-3">
            <div className={`tab-content ${activeTab === "accommodations" ? "" : "hidden"}`}>
              {activeTab === "accommodations" && renderTabContent()}
            </div>
            <div className={`tab-content ${activeTab === "stops" ? "" : "hidden"}`}>
              {activeTab === "stops" && renderTabContent()}
            </div>
            <div className={`tab-content ${activeTab === "packingLists" ? "" : "hidden"}`}>
              {activeTab === "packingLists" && renderTabContent()}
            </div>
          </div>
        </div>
        <div id='details content' className="flex-grow bg-white h-full">

        </div>
      </div>
    </div>
  );
}
