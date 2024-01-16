import { use, useEffect, useState } from "react";
import { fetchPackList } from "../../_utils/packListRequestsIndex";
import PackingCategoryList from "./PackingCategoryList";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";


export default function PackListPanel({ ...props }) {
  const [showCategory, setShowCategory] = useState(false);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(false);
  const packListId = props.trip.packList;
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedPackList = await fetchPackList(packListId);
        props.setPackList(fetchedPackList);
      } catch (error) {
        console.error("Error fetching pack list:", error);
      }
    };

    packListId ? fetchData() : null;
  }, [packListId]);

  if (
    props.activeTab !== "Packing List" &&
    props.activeTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <div className="flex flex-col bg-peach-300 rounded-xl">
        <RevealSectionBtn
          category={"Packing List"}
          buttonClicked={buttonClicked}
          arrowUp={arrowUp}
        />
        <div
          id={`packing-list-section`}
          className={`${
            showCategory ? null : "hidden"
          } flex gap-1 flex-row flex-wrap bg-gray-100 rounded-b-xl`}
        >
          {props.packList
            ?  Object.entries(props.packList).map(([category, items]) => {
              if (items.length === 0 || typeof items !== "object") {
                return null;
              }
              return (
                <PackingCategoryList
                  key={category}
                  category={category}
                  items={items}
                  {...props}
                />
              );
            })
            : 
            <button className="m-auto">Create Packing List</button>
            }

        </div>
      </div>
    );
  }
}
