import SectionContainer from "../trip-components/SectionContainer";
import { use, useEffect, useState } from "react";
import { fetchPackList } from "../../_utils/packListRequestsIndex";
import PackingCategoryList from "./PackingCategoryList";
import RevealSectionBtn from "../misc-components/RevealSectionBtn";


export default function PackListPanel({ tripProps, displayProps, requestProps, packListProps, ...props }) {
  const [showCategory, setShowCategory] = useState(true);

  const updatePackList = () => {
    requestProps.setRequestType("POST");
    packListProps.setShowPackListForm(true);
  }

  useEffect(() => {
    console.log("PackListPanel props", props);
  }), [packListProps.showPackListForm];

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedPackList = await fetchPackList(packListProps.packListId);
        packListProps.setPackList(fetchedPackList);
      } catch (error) {
        console.error("Error fetching pack list:", error);
      }
    };

    packListProps.packListId ? fetchData() : null;
  }, [packListProps.packListId]);

  if (
    displayProps.tripDisplayTab !== "Packing List" &&
    displayProps.tripDisplayTab !== "Full Details"
  ) {
    return null;
  } else {
    return (
      <SectionContainer category="Packing List" showCategory={showCategory} setShowCategory={setShowCategory} arrowUp={showCategory} {...props}>
          <button className="ms-auto text-blue-500 text-sm hover:text-blue-600" onClick={updatePackList}>Add/Remove Items</button>
          {packListProps.packList
            ?  Object.entries(packListProps.packList).map(([category, items]) => {
              if (items.length === 0 || typeof items !== "object") {
                return null;
              }
              return (
                <PackingCategoryList
                  key={category}
                  category={category}
                  items={items}
                  packList={packListProps.packList}
                  setPackList={packListProps.setPackList}
                />
              );
            })
            : 
            <button className="m-auto">Create Packing List</button>
            }
      </SectionContainer>
    );
  }
}
