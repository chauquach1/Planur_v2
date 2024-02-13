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

  // useEffect(() => {
  //   console.log('TripDisplay props', props);
  // }, []);

  return (
    <div
      id="content-panel-main"
      className="flex flex-col w-full h-full gap-3 overflow-y-auto p-4 bg-bismark-200 rounded-t-xl"
    >
      <Suspense fallback={<LoadingTripDisplay />}>
        <SummaryContainer trip={props.tripProps.selectedTrip} />
        <PanelNavContainer
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          displayProps={props.displayProps}
        />
        {/* <AccomsSection
          tripProps={props.tripProps}
          tripId={props.tripProps.selectedTrip._id}
          displayProps={props.displayProps}
          requestProps={props.requestProps}
          accomProps={props.accomProps}
        />
        <StopsSection
          stops={sampleStops}
          tripProps={props.tripProps}
          tripId={props.tripProps.selectedTrip._id}
          stopProps={props.stopProps}
          displayProps={props.displayProps}
          requestProps={props.requestProps}
        />
        <PackListSection
          tripProps={props.tripProps}
          tripId={props.tripProps.selectedTrip._id}
          displayProps={props.displayProps}
          requestProps={props.requestProps}
          packListProps={props.packListProps}
        /> */}
        <EmergencyContactSection 
          tripProps={props.tripProps}
          activeTab={activeTab}
          displayProps={props.displayProps}
          emergencyContactsProps={props.emergencyContactsProps}
        />
      </Suspense>
    </div>
  );
}
