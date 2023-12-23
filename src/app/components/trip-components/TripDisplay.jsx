import React from "react";
import { Suspense } from "react";
import LoadingTripDisplay from "./LoadingTripDisplay";
import SummaryContainer from "./SummaryContainer";
import AccomsSection from "../accommodations/AccomsSection";
import StopsSection from "../stops/StopsSection";
import PackListSection from "../packlist/PacklistSection";
import EmergencyContactSection from "../emergency-contact/EmergencyContactSection";
import sampleAccoms from "../../_tests_/sampleAccoms";
import sampleStops from "../../_tests_/sampleStops";
import samplePacklist from "../../_tests_/samplePacklist";
import PanelNavContainer from "../user-dashboard-components/panel-nav-components/PanelNavContainer";
import { useState } from "react";

export default function TripDisplay({ trip }) {
  const [activeTab, setActiveTab] = useState("Full Details");
  return (
    <div
      id="content-panel-main"
      className="flex flex-col w-full h-full gap-3 overflow-y-auto p-4"
    >
      <Suspense fallback={<LoadingTripDisplay />}>
        <SummaryContainer trip={trip} />
        <PanelNavContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        {/* <AccomsSection accoms={sampleAccoms} activeTab={activeTab}/> */}
        {/* <StopsSection stops={sampleStops} activeTab={activeTab}/> */}
        <PackListSection activeTab={activeTab} samplePacklist={samplePacklist}/>
        {/* <EmergencyContactSection activeTab={activeTab}/> */}
      </Suspense>
    </div>
  );
}
