import FullTripDetailsBtn from "./FullTripDetailsBtn";
import AccomsBtn from "./AccomsBtn";
import StopsBtn from "./StopsBtn";
import PackListBtn from "./PackListBtn";
import EmergencyContactsBtn from "./EmergencyContactsBtn";
export default function PanelNavContainer() {
  return (
    <div id="content-header" className="flex flex-row w-full h-max gap-5">
      <FullTripDetailsBtn />
      <AccomsBtn />
      <StopsBtn />
      <PackListBtn />
      <EmergencyContactsBtn />
    </div>
  );
}