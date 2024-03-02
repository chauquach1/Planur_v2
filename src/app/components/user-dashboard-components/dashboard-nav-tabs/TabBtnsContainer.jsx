import { FaUserAlt } from "react-icons/fa";
import { FaThList } from "react-icons/fa";

import TabBtn from "./TabBtn"
export default function TabBtnsContainer({ ...props }) {
  return (
    <div
      id="tabs-container"
      className="flex flex-col gap-2 p-3 text-lg shadow-lg w-full"
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
