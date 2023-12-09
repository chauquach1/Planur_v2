'use client';
import React from "react";
import normalDateFormat from "../../_utils/normalDateFormat";
import AccomsSection from "../accommodations/AccomsSection";
import StopsSection from "../stops/StopsSection";
import PackListSection from "../packlist/PackListSection";
import sampleAccoms from "../../_tests_/sampleAccoms";
import sampleStops from "../../_tests_/sampleStops";
import samplePackList from "../../_tests_/samplePackList";

export default function TripDisplay({ trip }) {
  const tripStartDate = normalDateFormat(trip.tripStartDate);
  const tripEndDate = normalDateFormat(trip.tripEndDate);

  return (
    <>
      <div id={trip._id.oid} className="max-w-[400px] max-h-40">
        <div className="flex flex-col">
          <p className="text-md">{trip.tripName}</p>
        </div>
        <p>
          {tripStartDate} - {tripEndDate}
        </p>
      </div>
      <AccomsSection accommodations={sampleAccoms} />
      <StopsSection stops={sampleStops} />
      <PackListSection packList={samplePackList} />
    </>
  );
}