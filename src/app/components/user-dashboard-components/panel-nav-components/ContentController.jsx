"use client";
import TabsContainer from "../dashboard-nav-tabs/TabBtnsContainer";
import TripTabsContainer from "../dashboard-nav-tabs/TripTabsContainer";

export default function ContentController({ userData, controllerTab, setControllerTab, setActiveTab, setSelectedTrip, trips, selectedTrip }) {

  return (
    <div className="flex flex-col w-full max-w-[350px] rounded-tr-xl me-2 bg-slate-300 p-4">
      <TabsContainer firstName={userData.firstName} lastName={userData.lastName} setControllerTab={setControllerTab} />
      <TripTabsContainer
        controllerTab={controllerTab}
        setControllerTab={setControllerTab}
        setSelectedTrip={setSelectedTrip}
        trips={trips}
        trip={selectedTrip}
        user={userData}
      />
    </div>
  );
}
