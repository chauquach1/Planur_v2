import AllTripsTab from "./AllTripsTab";
import TripTab from "./TripTab";
export default function TripTabsContainer({activeTab, setSelectedTrip, sampleTrips, trip}) {
  return (
    <div
      id="trip-tab-container"
      className="grid-flow-col mb-3 gap-2 overflow-y-scroll p-3 pt-0 justify-start"
    >
      {activeTab === "tripsindex" ? (
        <AllTripsTab
          sampleTrips={sampleTrips}
          setSelectedTrip={setSelectedTrip}
        />
      ) : (
        <TripTab
          trip={trip}
        />
      )}
    </div>
  );
}
