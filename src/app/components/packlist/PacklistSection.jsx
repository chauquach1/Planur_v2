import SectionContainer from "../trip-components/SectionContainer";
import { use, useEffect, useState } from "react";
import { fetchPackList } from "../../_utils/packListRequestsIndex";
import PackingCategoryList from "./PackingCategoryList";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";


export default function PackListPanel({ tripProps, displayProps, requestProps, packListProps, ...props }) {
  const [showCategory, setShowCategory] = useState(false);
  const [itemsCount, setItemsCount] = useState(0);
  
  const { tripId } = tripProps;
  const { setPackList, packList, setShowPackListForm } = packListProps;

  // CHECK FOR PACKLIST ITEMS COUNT
  useEffect(() => {
    console.log("Checking for pack list items count...");
    if (packList) {
      let count = 0;
      Object.values(packList).forEach((itemsArray) => {
        if (Array.isArray(itemsArray)) {
          count += itemsArray.length;
        }
      });
      setItemsCount(count);
    }
  }, [packList]);

  const updatePackList = () => {
    requestProps.setRequestType("POST");
    setShowPackListForm(true);
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching pack list...");
        let fetchedPackList = await fetchPackList(tripId);
        setPackList(fetchedPackList);
      } catch (error) {
        console.error("Error fetching pack list:", error);
      }
    };

    tripId ? fetchData() : setPackList({});
  }, [tripId]);

  if (
    displayProps.tripDisplayTab !== "Packing List" &&
    displayProps.tripDisplayTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <SectionContainer category="Packing List" showCategory={showCategory} setShowCategory={setShowCategory} arrowUp={showCategory} {...props}>
          <button className="ms-auto text-blue-500 text-sm hover:text-blue-600" onClick={updatePackList}>Add/Remove Items</button>
          <div className="text-center min-h-[38px] text-slate-500 text-lg">
            {packList && itemsCount > 0
              ?  Object.entries(packList).map(([category, items]) => {
                if (items.length === 0 || typeof items !== "object") {
                  return null;
                }
                return (
                  <PackingCategoryList
                    key={category}
                    category={category}
                    items={items}
                    packList={packList}
                    setPackList={setPackList}
                  />
                );
              })
              : 
                <p className="">No Packing List Found</p>
              }
          </div>
      </SectionContainer>
    );
  }
}
