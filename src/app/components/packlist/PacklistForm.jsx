import SectionContainer from "../trip-components/SectionContainer";
import EmergencyContactCard from "../emergency-contact/EmergencyContactCard";
import packListItems from "../../libs/completePackList";
import updatePackList from "../../_utils/updatePackList";
import samplePacklist from "../../_tests_/samplePacklist";
import { useState, useReducer, useCallback, useEffect, useRef } from "react";
import {
  Button,
  useDisclosure,
  Input,
  Accordion,
  AccordionItem,
  Checkbox,
} from "@nextui-org/react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.fieldName]: action.payload };
    case "RESET_FIELDS":
      return initialState;
    default:
      return state;
  }
};

export default function PackListForm({
  uuid,
  handleUpdateForm,
  tripId,
  packList,
  ...props
}) {
  // const [formState, dispatch] = useReducer(formReducer, initialState);
  const [initialState, setInitialState] = useState(packList);
  const initialRender = useRef(true);

  useEffect(() => {
    if(initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log('initialState changed', initialState);
    // updatePackList(initialState);
  }, [initialState]);
  
  const showPropsPackList = () => {
    // console.log('props: ', props);
    console.log('props.packList: ', packList);
    console.log('initialState: ', initialState);
  }

  const checkBoxValue = (category, item, index) => {

    if (
      initialState &&
      initialState[category] &&
      initialState[category][index] &&
      initialState[category][index].itemName === item
    ) {
      return { itemName: item, packed: null };
    }
  };

  const isDefaultSelected = (category, item) => {
    if (
      packList &&
      Array.isArray(packList[category]) &&
      packList[category].length > 0
    ) {
      const itemObj = packList[category].find((i) => i.itemName === item);
      if (itemObj && itemObj.included === true) {
        console.log("item included?: ", itemObj.itemName, itemObj.included);
        return true;
      }
    }
    return false;
  };


  // const handleChange = (category, item, index) => (e) => {
  //   showPropsPackList();
  //   setInitialState((prevState) => {
  //     // Copy the existing state
  //     const newState = { ...prevState };
  //     console.log('newState: ', newState);

  //     // Check if the category already exists in the state
  //     if (!newState[category]) {
  //       newState[category] = [];
  //     }

  //     // Find the index of the item in the category array
  //     const itemIndex = newState[category].findIndex(
  //       (i) => i.itemName === item
  //     );

  //     if (e.target.checked) {
  //       // If the checkbox is checked and the item does not exist, add it
  //       if (itemIndex === -1) {
  //         newState[category].unshift({ itemName: item, packed: false, included: true });
  //       } else {
  //         // If the item already exists, update its 'packed' property
  //         newState[category][itemIndex].packed = false;

  //         // If the item already exists, update its 'included' property
  //         newState[category][itemIndex].included = true;

  //       }
  //     } else {
  //       // If the checkbox is unchecked, set 'included' property to false
  //       if (itemIndex !== -1) {
  //         newState[category][itemIndex].included = false;
  //       }
  //     }
  //     return newState;
  //   });
  // };

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
          newState[category].unshift({ itemName: item, packed: false, included: true });
        } else {
          // If the item already exists, update its 'packed' property
          newState[category][itemIndex].packed = false;

          // If the item already exists, update its 'included' property
          newState[category][itemIndex].included = true;

        }
      } else {
        // If the checkbox is unchecked, set 'included' property to false
        if (itemIndex !== -1) {
          newState[category][itemIndex].included = false;
        }
      }
      return newState;
    });
  };

  const renderCheckboxGroup = (category, items) => {
    return (
      <div
        id={`${category}-checkbox-group`}
        className="ps-2 grid grid-flow-row gap-2"
      >
        {items.map((item, index) => (
          <Checkbox
            key={item}
            size="sm"
            name={item}
            defaultSelected={isDefaultSelected(category, item)}
            onChange={handleChange(category, item, index)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Checkbox>
        ))}
      </div>
    );
  };

  return (
    <form
      className={`${
        props.activeForm === "packList" ? "block" : "hidden"
      } flex flex-col overflow-y-scroll`}
    >
      <div className="flex flex-col h-full w-full overflow-y-scroll bg-white rounded-xl">
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
    </form>
  );
}