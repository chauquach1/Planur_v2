import { putPackList } from "../../_utils/packListRequestsIndex";
import { Checkbox } from "@nextui-org/react";
export default function PackingCategoryList({category, items, packList, setPackList}) {

  const handleChange = (category, itemId, isChecked) => {
    const updatedPackList =  packList ;

    const itemIndex = updatedPackList[category].findIndex(
      (item) => item._id === itemId
    );
    if (itemIndex !== -1) {
      updatedPackList[category][itemIndex].packed = isChecked;
    }

    setPackList(updatedPackList);
    putPackList(updatedPackList);
    console.log('handleChange PackingCategoryList', packList);
  };

  return (
    <div id={`${category}-list`} className="flex flex-col gap-2 pb-3 w-full">
      <h1 className="font-semibold underline underline-offset-2">{category[0].toUpperCase() + category.substring(1)}</h1>
      <div className="flex flex-row flex-wrap m-1">
        {items.map((item) => {
          if (item["included"] === false) return null;
          return (
            <Checkbox
              key={item["itemName"]}
              size="sm"
              name={item["itemName"]}
              // value={checkBoxValue(category, item, index)}
              defaultSelected={item["packed"]=== true ? true : false}
              onChange={(e) => handleChange(category, item["_id"], e.target.checked)}
              // onChange={handleChange}
              className="bg-white border-1 rounded-xl m-1 p-2"
            >
              {item["itemName"]}
            </Checkbox>
          );
        })}
      </div>
    </div>
  )
}