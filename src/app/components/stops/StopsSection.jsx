import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
export default function StopsSection({stops}) {
  return (
    <SectionContainer category="Stops">
      {stops.map((stop) => {
        return <StopsCard key={stop.stopName} stop={stop} />;
      })}
    </SectionContainer>
  );
}
