import TabBtn from "./TabBtn"
export default function TabBtnsContainer({ setActiveTab }) {
  return (
    <div
      id="tabs-container"
      className="flex flex-row justify-around pb-3 border-b-2 border-black"
    >
      <TabBtn
        category="tripsindex"
        innerText="All Trips"
        setActiveTab={setActiveTab}
      />
      <TabBtn
        category="tripcontrol"
        innerText="Trip Details"
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
