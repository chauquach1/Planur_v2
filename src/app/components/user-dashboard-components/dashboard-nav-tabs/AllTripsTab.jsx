import ContentNavCard from "../content-nav-components/ContentNavCard";
export default function AllTripsTab({ sampleTrips, setSelectedTrip }) {
  return (
    <>
      {sampleTrips.map((trip) => {
        return (
          <ContentNavCard
            trip={trip}
            key={trip._id.oid}
            setSelectedTrip={setSelectedTrip}
          />
        );
      })}
    </>
  );
}
