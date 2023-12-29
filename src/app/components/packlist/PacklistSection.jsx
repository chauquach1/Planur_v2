import { useState } from "react";
import PackingCategoryList from "./PackingCategoryList";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";


export default function PackListPanel({
  uuid,
  tripId,
  handleUpdateForm,
  ...props
}) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };

  const packList = props.samplePacklist
  console.log("packList: ", packList);
  

  if (
    props.activeTab !== "Packing List" &&
    props.activeTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <div className="flex flex-col bg-peach-300 rounded-xl">
        <div className="flex flex-row w-full justify-between p-2 pe-10">
          <h1 className="font-bold text-lg text-white">Packing List</h1>
          <RevealSectionBtn buttonClicked={buttonClicked} arrowUp={arrowUp} />
        </div>
        <div
          id={`packing-list-section`}
          className={`${
            showCategory ? null : "hidden"
          } flex gap-1 flex-row flex-wrap bg-gray-100 rounded-b-xl`}
        >
          {Object.entries(props.samplePacklist).map(([category, items]) => {
            return (
              <PackingCategoryList
                key={category}
                category={category}
                items={items}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
