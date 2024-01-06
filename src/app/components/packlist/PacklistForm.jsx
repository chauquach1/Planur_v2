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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialState, setInitialState] = useState(samplePacklist);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);
  const initialRender = useRef(true);

  useEffect(() => {
    if(initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log('updatePackList called');
    // updatePackList({ tripId, ...initialState });
  }, [initialState]);
  
  const showProps = () => {
    console.log('packList', packList);
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
    if (initialState && Array.isArray(initialState[category])) {
      const itemObj = initialState[category].find((i) => i.itemName === item);
      return itemObj ? true : false;
    }
    return false;
  };


  const handleChange = (category, item, index) => (e) => {
    setInitialState((prevState) => {
      // Copy the existing state
      const newState = { ...prevState };

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
          newState[category].unshift({ itemName: item, packed: null });
        } else {
          // If the item already exists, update its 'packed' property
          newState[category][itemIndex].packed = null;
        }
      } else {
        // If the checkbox is unchecked, remove the item from the array
        if (itemIndex !== -1) {
          newState[category].splice(itemIndex, 1);
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
            // value={checkBoxValue(category, item, index)}
            // defaultSelected={isDefaultSelected(category, item)}
            // onChange={handleChange(category, item, index)}
            onChange={showProps}
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