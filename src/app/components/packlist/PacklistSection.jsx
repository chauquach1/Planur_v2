import { use, useEffect, useState } from "react";
import fetchPackList from "../../_utils/fetchPackList";
import PackingCategoryList from "./PackingCategoryList";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";
import { set } from "date-fns";


export default function PackListPanel({
  uuid,
  tripId,
  handleUpdateForm,
  packListId,
  ...props
}) {
  const [showCategory, setShowCategory] = useState(true);
  const [btnText, setBtnText] = useState(true);
  const [arrowUp, setArrow] = useState(true);
  const [packList, setPackList] = useState(null);
  const buttonClicked = () => {
    setBtnText(!btnText);
    setShowCategory(!showCategory);
    setArrow(!arrowUp);
  };

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        let fetchedPackList = await fetchPackList(packListId);
        setPackList(fetchedPackList);
        console.log('packList', fetchedPackList);
      } catch (error) {
        console.error('Error fetching pack list:', error);
      }
    };
  
    // Call the async function
    fetchData();
  }, [packListId]);

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
          {/* {packList !== null ? 'packList' : 'no packList'} */}
          {packList === null ? (
            null
          ) : (
            Object.entries(packList).map(([category, items]) => {
              if (items.length === 0 || typeof items !== "object") {
                return null;
              }
              return (
                <PackingCategoryList
                  key={category}
                  category={category}
                  items={items}
                  packListId={packListId}
                  setPackList={setPackList}
                  packList={packList}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}
