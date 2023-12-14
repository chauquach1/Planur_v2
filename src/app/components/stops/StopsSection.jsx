import SectionContainer from "../trip-components/SectionContainer";
export default function StopsSection({stops}) {
  return (
    <SectionContainer category="Stops">
      {/* {stops.map((stop) => {
        return <AccommodationsCard key={stop.stopName} stop={stop} />;
      })} */}
    </SectionContainer>
  );
}
