"use client";
import StopsCard from "./StopsCard";

export default function StopsTab({ stops, currCardData, currCardType, prevCardData, prevCardType, handleCardPress }) {

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
