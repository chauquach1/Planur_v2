import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
export default function AccomsSection({ ...props }) {
  if (props.activeTab !== "Accommodations" && props.activeTab !== "Full Details") {
    return null;
  } else {
    return (
      <SectionContainer category="Accommodations" {...props}>
        {props.accoms.map((accom) => {
          return <AccommodationsCard key={accom.accomName} accom={accom} />;
        })}
      </SectionContainer>
    );
  }
}
