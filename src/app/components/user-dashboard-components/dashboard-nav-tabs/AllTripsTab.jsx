import ContentNavCard from "../content-nav-components/ContentNavCard";
import { Suspense } from "react";
import LoadingTrips from "../suspense-components/LoadingTrips";

export default function AllTripsTab({
  trips,
  setSelectedTrip,
  user,
}) {
  return (
    <Suspense fallback={<LoadingTrips />}>
      {trips.map((trip) => {
        return (
          <ContentNavCard
            trip={trip}
            key={trip._id}
            setSelectedTrip={setSelectedTrip}
            user={user}
          />
        );
      })}
    </Suspense>
  );
}
