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
import AccomsBtn from "../user-dashboard-components/panel-nav-components/AccomsBtn";  
import StopsBtn from "../user-dashboard-components/panel-nav-components/StopsBtn";
import PackListBtn from "../user-dashboard-components/panel-nav-components/PackListBtn";
import EmergencyContactsBtn from "../user-dashboard-components/panel-nav-components/EmergencyContactsBtn";
import FullTripDetailsBtn from "../user-dashboard-components/panel-nav-components/FullTripDetailsBtn";

export default function TripDisplay({ trip }) {
  return (
    <div
      id="content-panel-main"
      className="flex flex-col w-full h-full gap-3 overflow-y-auto p-4"
    >
      <Suspense fallback={<LoadingTripDisplay />}>
        <SummaryContainer trip={trip} />
        <div id="content-header" className="flex flex-row w-full h-max gap-5">
          <FullTripDetailsBtn />
          <AccomsBtn />
          <StopsBtn />
          <PackListBtn />
          <EmergencyContactsBtn />
        </div>
        <AccomsSection accoms={sampleAccoms} />
        <StopsSection stops={sampleStops} />
        <PackListSection />
        <EmergencyContactSection category="Emergency Contacts" />
      </Suspense>
    </div>
  );
}
