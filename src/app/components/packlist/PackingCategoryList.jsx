import { Checkbox } from "@nextui-org/react";
export default function PackingCategoryList({...props}) {
  let itemsArray = props.items;

  return (
    <div id={`${props.category}-list`} className="flex flex-col gap-2 p-3 w-full border-b-1">
      <h1 className="font-semibold underline underline-offset-2">{props.category[0].toUpperCase() + props.category.substring(1)}</h1>
      <div className="flex flex-row flex-wrap m-1">
        {itemsArray.map((item) => {
          return (
            <Checkbox
              key={item["itemName"]}
              size="sm"
              name={item["itemName"]}
              // value={checkBoxValue(category, item, index)}
              defaultSelected={item["packed"]=== true ? true : false}
              // onChange={handleChange(category, item, index)}
              className="bg-slate-100 border-1 rounded-xl m-1 p-2"
            >
              {item["itemName"]}
            </Checkbox>
          );
        })}
      </div>
    </div>
  )
}