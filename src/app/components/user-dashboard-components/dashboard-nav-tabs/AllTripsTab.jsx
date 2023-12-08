import ContentNavCard from "../content-nav-components/ContentNavCard"
export default function AllTripsTab({sampleTrips, setSelectedTrip}) {
  return (
    <div
      id="trip-cards-container"
      className="grid-flow-col mb-3 gap-2 overflow-y-scroll p-3"
    >
      {sampleTrips.map((trip) => {
        return (
          <ContentNavCard
            trip={trip}
            key={trip._id.oid}
            setSelectedTrip={setSelectedTrip}
          />
        );
      })}
    </div>
  );
}
