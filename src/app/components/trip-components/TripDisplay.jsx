import React, { use } from "react";
import { Suspense } from "react";
import LoadingTripDisplay from "./LoadingTripDisplay";
import SummaryContainer from "./SummaryContainer";
import AccomsSection from "../accommodations/AccomsSection";
import StopsSection from "../stops/StopsSection";
import PackListSection from "../packlist/PacklistSection";
import EmergencyContactSection from "../emergency-contact/EmergencyContactSection";
import sampleStops from "../../_tests_/sampleStops";
import PanelNavContainer from "../user-dashboard-components/panel-nav-components/PanelNavContainer";
import { useEffect, useState } from "react";

export default function TripDisplay({ ...props }) {
  const [activeTab, setActiveTab] = useState("Full Details");
  const { tripProps, displayProps, requestProps, accomProps, stopProps, packListProps, emergencyContactsProps } = props;

  return (
    <div
      id="content-panel-main"
      className="flex flex-col w-full h-full gap-3 overflow-y-auto p-4 bg-bismark-200"
    >
      <Suspense fallback={<LoadingTripDisplay />}>
        <SummaryContainer trip={props.tripProps.selectedTrip} />
        <PanelNavContainer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          displayProps={displayProps}
        />
        <AccomsSection
          tripProps={tripProps}
          displayProps={displayProps}
          requestProps={requestProps}
          accomProps={accomProps}
        />
        <StopsSection
          stops={sampleStops}
          tripProps={tripProps}
          tripId={tripProps.selectedTrip._id}
          stopProps={stopProps}
          displayProps={displayProps}
          requestProps={requestProps}
        /> 
        <PackListSection
          tripProps={tripProps}
          tripId={tripProps.selectedTrip._id}
          displayProps={displayProps}
          requestProps={requestProps}
          packListProps={packListProps}
        />
        <EmergencyContactSection 
          tripProps={tripProps}
          activeTab={activeTab}
          displayProps={displayProps}
          requestProps={requestProps}
          emergencyContactsProps={emergencyContactsProps}
        />
      </Suspense>
    </div>
  );
}
