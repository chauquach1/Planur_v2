"use client";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import { useEffect } from "react";

export default function AccommodationsTab({ tripId, getAccoms, accommodations, currCardData, currCardType, prevCardData, prevCardType, handleCardPress }) {

  return accommodations.length > 0 ? (
    accommodations.map((accommodation) => (
      <AccommodationsCard
        data={accommodation}
        key={accommodation._id}
        currCardData={currCardData}
        currCardType={currCardType}
        prevCardData={prevCardData}
        prevCardType={prevCardType}
        handleCardPress={handleCardPress}
      />
    ))
  ) : (
    <p className="font-thin italic text-gray-500">Accommodations Empty</p>
  );
}
