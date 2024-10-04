import AccomsForm from "../../accommodations/AccomsForm";
import StopsForm from "../../stops/StopsForm";
import PackListCheckboxForm from "../../packlist/PackListCheckboxForm";
import EmergencyContactForm from "../../emergency-contact/EmergencyContactForm";
import EditTripForm from "../../trip-components/EditTripForm";
import { useEffect } from "react";
export default function SideContainer({displayProps, tripProps, stopProps, requestProps, accomProps, packListProps, emergencyContactsProps}) {
  // useEffect(() => {
  //   console.log('accomProps', accomProps);
  // },[]);

  return (
    <div
      id="content-panel-side"
      className={`hidden right-0 top-0 mx-auto
      lg:flex flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] py-4 px-4 bg-slate-300`}
    >
      <AccomsForm
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        accomProps={accomProps}
      />
      <StopsForm
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        stopProps={stopProps}
      />
      <PackListCheckboxForm
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        packListProps={packListProps}
      />
      <EmergencyContactForm
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
        emergencyContactsProps={emergencyContactsProps}
      />
      <EditTripForm
        displayProps={displayProps}
        tripProps={tripProps}
        requestProps={requestProps}
      />
    </div>
  );
}
