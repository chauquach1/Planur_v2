import TabBtn from "./TabBtn"
export default function TabBtnsContainer({ setActiveTab }) {
  return (
    <div
      id="tabs-container"
      className="flex flex-row justify-around pb-3 border-b-2 border-black"
    >
      <TabBtn
        category="tripsindex"
        innerText="My Trips"
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
