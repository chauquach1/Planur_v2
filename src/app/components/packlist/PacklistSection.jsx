import { useState } from "react";
import checkPackedItems from "../../_utils/checkPackingList";
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

  const packList = checkPackedItems(props.samplePacklist);
  

  if (
    props.activeTab !== "Packing List" &&
    props.activeTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <>
        <div className="flex flex-row w-full justify-between border-y-2 py-2 pe-10">
          <h1 className="font-bold text-lg">Packing List</h1>
          <RevealSectionBtn buttonClicked={buttonClicked} arrowUp={arrowUp} />
        </div>
        <div
          id={`packing-list-section`}
          className={`${
            showCategory ? null : "hidden"
          } flex gap-1 xl:px-2 flex-row flex-wrap`}
        >
          {Object.entries(packList).map(([category, items]) => {
            return (
              <PackingCategoryList
                key={category}
                category={category}
                items={items}
              />
            );
          })}
        </div>
      </>
    );
  }
}
