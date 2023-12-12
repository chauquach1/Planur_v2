import React from "react";
import { Suspense } from "react";
import LoadingTripDisplay from "./LoadingTripDisplay";
import SummaryContainer from "./SummaryContainer";
import AccomsSection from "../accommodations/AccomsSection";
import StopsSection from "../stops/StopsSection";
import PackListSection from "../packlist/PacklistSection";
import sampleAccoms from "../../_tests_/sampleAccoms";
import sampleStops from "../../_tests_/sampleStops";
import samplePacklist from "../../_tests_/samplePacklist";

export default function TripDisplay({ trip }) {
  return (
    <div
      id="content-panel-main"
      className="grid-flow-col w-full md:basis-3/4 h-auto overflow-y-auto p-4"
    >
      <Suspense fallback={<LoadingTripDisplay />}>
        <SummaryContainer trip={trip} />
        <AccomsSection accoms={sampleAccoms} />
        <StopsSection stops={sampleStops} />
        <PackListSection packList={samplePacklist} />
      </Suspense>
    </div>
  );
}
