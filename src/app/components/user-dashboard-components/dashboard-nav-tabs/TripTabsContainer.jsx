import AllTripsTab from "./AllTripsTab";
import TripTab from "./TripTab";
export default function TripTabsContainer({
  activeTab,
  setSelectedTrip,
  sampleTrips,
  trips,
  trip,
  user,
}) {
  return (
    <>
      <div
        id="trips-index-container"
        className={`${activeTab === "tripsindex" ? null : "hidden"} grid-flow-col mb-3 gap-2 overflow-y-scroll p-3 pt-0 justify-start`}
      >
        <AllTripsTab
          trips={trips}
          sampleTrips={sampleTrips}
          setSelectedTrip={setSelectedTrip}
          user={user}
        />
      </div>
      <div
        id="trip-tab-container"
        className={`${activeTab === "tripsindex" ? "hidden" : null} grid-flow-col mb-3 gap-2 overflow-y-scroll p-3 pt-0 justify-start`}
      >
        <TripTab trip={trip} />
      </div>
    </>
  );
}
