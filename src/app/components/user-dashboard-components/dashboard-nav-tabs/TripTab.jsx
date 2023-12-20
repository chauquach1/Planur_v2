import AccomsBtn from "../panel-nav-components/AccomsBtn";
import StopsBtn from "../panel-nav-components/StopsBtn";
import PackListBtn from "../panel-nav-components/PackListBtn";
import EmergencyContactsBtn from "../panel-nav-components/EmergencyContactsBtn";

export default function TripTab({trip}) {
  return (
    <div className="flex flex-col gap-3 mt-3">
      <div className="text-center font-semibold text-2xl">
        <h1>{trip.tripName}</h1>
      </div>
      {/* <AccomsBtn />
      <StopsBtn />
      <PackListBtn />
      <EmergencyContactsBtn /> */}
    </div>
  );
}
