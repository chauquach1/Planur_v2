import updatePackList from "../../_utils/updatePackList";
import { Checkbox } from "@nextui-org/react";
export default function PackingCategoryList({...props}) {

  const handleChange = (category, itemId, isChecked) => {
    const updatedPackList = { ...props.packList };

    const itemIndex = updatedPackList[category].findIndex(
      (item) => item._id === itemId
    );
    if (itemIndex !== -1) {
      updatedPackList[category][itemIndex].packed = isChecked;
    }

    props.setPackList(updatedPackList);
    updatePackList(updatedPackList);
    console.log(props.packList);
  };


  return (
    <div id={`${props.category}-list`} className="flex flex-col gap-2 p-3 w-full border-b-1">
      <h1 className="font-semibold underline underline-offset-2">{props.category[0].toUpperCase() + props.category.substring(1)}</h1>
      <div className="flex flex-row flex-wrap m-1">
        {props.items.map((item) => {
          return (
            <Checkbox
              key={item["itemName"]}
              size="sm"
              name={item["itemName"]}
              // value={checkBoxValue(category, item, index)}
              defaultSelected={item["packed"]=== true ? true : false}
              onChange={(e) => handleChange(props.category, item["_id"], e.target.checked)}
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