"use client";
import AccommodationsCard from "../../components/trip-components/AccommodationsCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function AccommodationsTab({ uuid, tripId }) {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    async function getAllAccommodations() {
      try {
        const response = await fetch(`/api/accommodations?tripId=${tripId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong!");
        }
        setAccommodations(data);
      } catch (error) {
        console.error(error);
      }
    }

    getAllAccommodations();
  }, []);


  return accommodations.length > 0 ? (
    accommodations.map((accommodation) => (
      <AccommodationsCard data={accommodation} key={accommodation._id} />
    ))
  ) : (
    <p className="font-thin italic text-gray-500">Accommodations Empty</p>
  );
}
