import { FaUserAlt } from "react-icons/fa";
import { FaThList } from "react-icons/fa";

import TabBtn from "./TabBtn"
export default function TabBtnsContainer({ ...props }) {
  return (
    <div
      id="tabs-container"
      className="flex flex-col gap-2 pb-3 border-b-2 text-lg border-white w-full"
    >
      <TabBtn
        category="accountDetails"
        innerText={`${props.firstName} ${props.lastName}`}
        setActiveTab={props.setActiveTab}
        icon={<FaUserAlt />}
      />
      <TabBtn
        category="tripsindex"
        innerText="My Trips"
        setActiveTab={props.setActiveTab}
        icon={<FaThList />}
      />
    </div>
  );
}
