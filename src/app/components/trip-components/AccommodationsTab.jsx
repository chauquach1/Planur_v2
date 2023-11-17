"use client";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import { useEffect } from "react";

export default function AccommodationsTab({ tripId, getAccoms, accommodations, panelType, currCardData, currCardType, prevCardData, prevCardType, handleCardPress }) {
  
  useEffect(() => {
    getAccoms();
  }, [tripId]);

  return accommodations.length > 0 ? (
    accommodations.map((accommodation) => (
      <AccommodationsCard
        data={accommodation}
        key={accommodation._id}
        panelType={panelType}
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
