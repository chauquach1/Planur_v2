"use client";
import StopsCard from "../../components/trip-components/StopsCard";
import { useState, useEffect } from "react";

export default function StopsTab({ tripId, getTripStops, stops, currCardData, currCardType, prevCardData, prevCardType, handleCardPress }) {

  // return <p className="font-thin italic text-gray-500"> Stops Empty</p>
  return stops.length > 0 ? (
    stops.map((stop) => (
      <StopsCard
        data={stop}
        key={stop._id}
        currCardData={currCardData}
        currCardType={currCardType}
        prevCardData={prevCardData}
        prevCardType={prevCardType}
        handleCardPress={handleCardPress}
      />
    ))
  ) : (
    <p className="font-thin italic text-gray-500"> Stops Empty</p>
  );
}
