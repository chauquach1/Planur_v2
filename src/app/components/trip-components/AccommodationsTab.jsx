// 'use client'
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
// import StopsCard from "../../components/trip-components/StopsCard";
// import PackListCard from "../../components/trip-components/PackListCard";
// import { useState, useEffect } from "react";
// import TripConsoleAddBtn from "../../components/trip-components/TripConsoleAddBtn";
// import { createBrowserClient } from "@supabase/ssr";
// import TabButton from "../../components/trip-components/TabButton";
// import { getAllAccommodations } from "../../api/accommodations/route";




export default function AccommodationsTab( {accommodations, accomIds}) {
  // console.log(accommodations);
  // console.log(accomIds);

  return (
    accomIds && accomIds.length > 0 ? (
      accomIds.map((accomId) => (
        <AccommodationsCard data={accomId} key={accomId} />
      ))
    ) : (
      <p className="font-thin italic text-gray-500"> Accommodations Empty</p>
    )
      // <p className="font-thin italic text-gray-500"> Accommodations Tab</p>
  )
}
