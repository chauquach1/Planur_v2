"use client";
import TabsContainer from "../dashboard-nav-tabs/TabBtnsContainer";
import TripTabsContainer from "../dashboard-nav-tabs/TripTabsContainer";

export default function ContentController({ userData, activeTab, setActiveTab, setSelectedTrip, trips, selectedTrip }) {

  return (
    <div className="flex flex-col w-full max-w-[350px] bg-slate-200">
      <div className=" text-center text-xl min-h-[100px] p-2">
        <h1 className="leading-tight">
          {userData.firstName} {userData.lastName}'s Planur
        </h1>
      </div>
      <TabsContainer setActiveTab={setActiveTab} />
      <TripTabsContainer
        activeTab={activeTab}
        setSelectedTrip={setSelectedTrip}
        trips={trips}
        trip={selectedTrip}
        user={userData}
      />
    </div>
  );
}
