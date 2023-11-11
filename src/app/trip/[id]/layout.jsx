// "use client";
// const punycode = require("punycode/");
// import { get } from "mongoose";
import TripBanner from "../../components/trip-components/TripBanner";
import TripConsole from "../../components/trip-components/TripConsole";
// import User from "../../models/user.js"


// Get Trip Details with tripId
const getTripDetails = async (tripId) => {
  const response = await fetch(`http://localhost:3000/api/trip/${tripId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = await response.json();
  return result
};


export default async function TripDashboardLayout({params, children}) {
  const tripId = params.id;
  const tripDetails = await getTripDetails(tripId)
  // console.log('tripDetails', tripDetails);
  

  return (
    <div className="columns-1 flex flex-col w-full h-fit text-center items-center justify-center">
      <TripBanner trip={tripDetails} />
      <TripConsole trip={tripDetails} />
    </div>
  );
}
