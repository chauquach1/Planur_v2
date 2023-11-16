"use client";
import StopsCard from "../../components/trip-components/StopsCard";
import { useState, useEffect } from "react";

export default function StopsTab({ uuid, tripId }) {
  const [stops, setStops] = useState([]);

  useEffect(() => {
    async function getAllStops() {
      try {
        const response = await fetch(`/api/stops?tripId=${tripId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong!");
        }
        setStops(data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllStops();
  }, []);

  return stops.length > 0 ? (
    stops.map((stop) => (
      <StopsCard data={stop} key={stop._id} />
    ))
  ) : (
    <p className="font-thin italic text-gray-500"> Stops Empty</p>
  );
}
