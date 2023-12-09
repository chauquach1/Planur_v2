import React from "react";
import { Suspense } from "react";
import LoadingTripDisplay from "./LoadingTripDisplay";
import SummaryContainer from "./SummaryContainer";
import AccomsSection from "../accommodations/AccomsSection";
import StopsSection from "../stops/StopsSection";
import PackListSection from "../packlist/PacklistSection";
import sampleAccoms from "../../_tests_/sampleAccoms";
import sampleStops from "../../_tests_/sampleStops";
import samplePackList from "../../_tests_/samplePackList";

export default function TripDisplay({ trip }) {

  return (
    <Suspense fallback={<LoadingTripDisplay />}>
      <SummaryContainer trip={trip} />
      <AccomsSection accoms={sampleAccoms} />
      <StopsSection stops={sampleStops} />
      <PackListSection packList={samplePackList} />
    </Suspense>
  );
}
