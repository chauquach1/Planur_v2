import ContentNavCard from "./ContentNavCard";
import sampleTrips from "../../../_tests_/sampleTrips";

export default function ContentNavContainer() {
  
  return (
    <div
      id="content-nav-container"
      className="flex flex-col h-fit w-full bg-white"
    >
      <h1>content nav container</h1>
      {sampleTrips.map((trip) => {
        return <ContentNavCard trip={trip} key={trip._id.oid} />;
      })}
    </div>
  );
}