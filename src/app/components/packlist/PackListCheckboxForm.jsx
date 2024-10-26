import packListItems from "../../../lib/completePackList";
import { putPackList, postPackList } from "../../_utils/packListRequestsIndex";
import { useState, useReducer, useCallback, useEffect, useRef } from "react";
import FormWrapper from "../form-components/FormWrapper";
import {
  Accordion,
  AccordionItem,
  Checkbox,
} from "@nextui-org/react";


export default function PackListCheckboxForm({packListProps, requestProps: {requestType, setRequestType}, tripProps, ...props}) {
  const { packList, setPackList, showPackListForm, setShowPackListForm } = packListProps;
  const [initialState, setInitialState] = useState(packList);
  const initialRender = useRef(true);

  const { tripId } = tripProps;

  useEffect(() => {
    if(initialRender.current) {
      initialRender.current = false;
      return;
    }
    setPackList(initialState);
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
      // If packList._id exists, update it, otherwise create it
      packList._id ? putPackList(newState) : postPackList(tripId, newState);
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
    <FormWrapper isVisible={showPackListForm ? "absolute h-full p-0" : "hidden"} onClick={() => setShowPackListForm(false)}>
        <div className="relative flex flex-col my-auto h-full overflow-y-scroll w-full  bg-white rounded-xl">
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
    </FormWrapper>
  );
}