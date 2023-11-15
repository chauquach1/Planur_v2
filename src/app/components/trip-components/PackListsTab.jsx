import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import StopsCard from "../../components/trip-components/StopsCard";
import PackListCard from "../../components/trip-components/PackListCard";
// import { useState, useEffect } from "react";
import TripConsoleAddBtn from "../../components/trip-components/TripConsoleAddBtn";
import { createBrowserClient } from "@supabase/ssr";
import TabButton from "../../components/trip-components/TabButton";
import { getAllAccommodations } from "../../api/accommodations/route";

export default function PackListsTab({ tripConsoleDetails }) {
  tripId=tripConsoleDetails.tripId
  // GET ALL ACCOMMODATIONS
  useEffect(() => {
    const getAccommodations = async () => {
      try {
        const accommodations = await getAllAccommodations(tripId);
        console.log("accommodations: ", accommodations);
      } catch (error) {
        console.log("Error fetching accommodations:", error);
      }
    };
    getAccommodations();
  }, [tripId]); // Depend on tripId to refetch when it changes

    const getAccommodations = async () => {
      try {
        const accommodations = await getAllAccommodations(tripId);
        console.log("accommodations: ", accommodations);
      } catch (error) {
        console.log("Error fetching accommodations:", error);
      }
    };
    getAccommodations();

  return (
    accomIds && accomIds.length > 0 ? (
      accomIds.map((accomId) => (
        <AccommodationsCard key={accomId} accomId={accomId} />
      ))
    ) : (
      <p className="font-thin italic text-gray-500"> Accommodations Empty</p>
    )
  )
}
