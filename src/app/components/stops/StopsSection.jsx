import SectionContainer from "../trip-components/SectionContainer";
import StopsCard from "./StopsCard";
export default function StopsSection({...props}) {
  if (props.activeTab !== "Stops" && props.activeTab !== "Full Details") {
    return null;
  } else {
    return (
      <SectionContainer category="Stops" {...props}>
        {props.stops.map((stop) => {
          return <StopsCard key={stop.stopName} stop={stop} />;
        })}
      </SectionContainer>
    );
  }
}
