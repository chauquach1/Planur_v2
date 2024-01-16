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
import PanelNavContainer from "../user-dashboard-components/panel-nav-components/PanelNavContainer";
import { useState } from "react";

export default function TripDisplay({ ...props }) {
  const [activeTab, setActiveTab] = useState("Full Details");
  
  return (
    <div
      id="content-panel-main"
      className="flex flex-col w-full h-full gap-3 overflow-y-auto p-4 bg-bismark-200 rounded-t-xl"
    >
      <Suspense fallback={<LoadingTripDisplay />}>
        <SummaryContainer trip={props.trip} />
        <PanelNavContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        <AccomsSection
          accoms={props.accomsIndex}
          activeTab={activeTab}
          accomsIdIndex={props.accomsIdIndex}
          setAccomsIdIndex={props.setAccomsIdIndex}
          accomsIndex={props.accomsIndex}
          setAccomsIndex={props.setAccomsIndex}
          activeAccom={props.activeAccom}
          setActiveAccom={props.setActiveAccom}
          tripId={props.trip._id}
        />
        <StopsSection stops={sampleStops} activeTab={activeTab} />
        <PackListSection activeTab={activeTab} {...props} />
        <EmergencyContactSection activeTab={activeTab} />
      </Suspense>
    </div>
  );
}
