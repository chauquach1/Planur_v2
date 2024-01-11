import packListItems from "../../libs/completePackList";
import { putPackList } from "../../_utils/packListRequests";
import { useState, useReducer, useCallback, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionItem,
  Checkbox,
} from "@nextui-org/react";


export default function PackListForm({
  packList,
  ...props
}) {
  const [initialState, setInitialState] = useState(packList);
  const initialRender = useRef(true);

  useEffect(() => {
    if(initialRender.current) {
      initialRender.current = false;
      return;
    }
    props.setPackList(initialState);
  }, [initialState]);
  
  const isDefaultSelected = (category, item) => {
    if (
      packList &&
      Array.isArray(packList[category]) &&
      packList[category].length > 0
    ) {
      const itemObj = packList[category].find((i) => i.itemName === item);
      if (itemObj && itemObj.included === true) {
        return true;
      }
    }
    return false;
  };

  const handleChange = (category, item) => (e) => {
    setInitialState(() => {
      // Copy the existing state
      let newState = {...packList};

      // Check if the category already exists in the state
      if (!newState[category]) {
        newState[category] = [];
      }

      // Find the index of the item in the category array
      const itemIndex = newState[category].findIndex(
        (i) => i.itemName === item
      );

      if (e.target.checked) {
        // If the checkbox is checked and the item does not exist, add it
        if (itemIndex === -1) {
          function sortItemsAlphabetically(items) {
            return items.sort((a, b) => a.itemName.localeCompare(b.itemName));
          }
          newState[category].unshift({
            itemName: item,
            packed: false,
            included: true,
          });
          sortItemsAlphabetically(newState[category]);
        } else {
          // If the item already exists, update its 'included' property
          newState[category][itemIndex].included = true;

          // If the item already exists, update its 'packed' property
          newState[category][itemIndex].packed = false;

        }
      } else {
        // If the checkbox is unchecked, remove the item from the category array
        if (itemIndex !== -1) {
          newState[category].splice(itemIndex, 1);
        }
      }
      // putPackList(newState);
      console.log("packList", packList);
      console.log("newState", newState);
      packList ? putPackList(newState) : null;
      return newState;
    });
  };

  const renderCheckboxGroup = (category, items) => {
    return (
      <div
        id={`${category}-checkbox-group`}
        className="ps-2 grid grid-flow-row gap-2"
      >
        {items.map((item) => (
          <Checkbox
            key={item}
            size="sm"
            name={item}
            defaultSelected={isDefaultSelected(category, item)}
            onChange={handleChange(category, item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Checkbox>
        ))}
      </div>
    );
  };

  return (
    <div
      className={`${
        props.activeForm === "packList" ? "block" : "hidden"
      } flex flex-col h-full w-full overflow-y-scroll bg-white rounded-xl`}
    >
      <Accordion isCompact selectionMode="multiple">
        {Object.entries(packListItems).map(([category, items], index) => (
          <AccordionItem
            key={index}
            aria-label={category}
            title={category.charAt(0).toUpperCase() + category.slice(1)}
          >
            {renderCheckboxGroup(category, items)}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}