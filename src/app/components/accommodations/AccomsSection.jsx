import SectionContainer from "../trip-components/SectionContainer";
import AccommodationsCard from "./AccommodationsCard";
export default function AccomsSection({ accoms }) {
  return (
    <SectionContainer category="Accommodations">
      {accoms.map((accom) => {
        return <AccommodationsCard key={accom.accomName} accom={accom} />;
      })}
    </SectionContainer>
  );
}
