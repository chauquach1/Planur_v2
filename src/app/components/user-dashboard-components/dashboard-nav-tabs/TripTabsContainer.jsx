import AllTripsTab from "./AllTripsTab";
import TripTab from "./TripTab";
export default function TripTabsContainer({
  controllerTab,
  setControllerTab,
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
        className={`${controllerTab === "tripsindex" ? null : "hidden"} shadow-inner w-full grid-flow-col gap-2 px-3 overflow-y-scroll justify-start`}
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
        className={`${controllerTab === "tripsindex" ? "hidden" : null} grid-flow-col mb-3 gap-2 overflow-y-scroll p-3 pt-0 justify-start`}
      >
        <TripTab trip={trip} />
      </div>
    </>
  );
}
