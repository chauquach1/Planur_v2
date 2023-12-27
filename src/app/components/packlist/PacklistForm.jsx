import SectionContainer from "../trip-components/SectionContainer";
import EmergencyContactCard from "../emergency-contact/EmergencyContactCard";
import packListItems from "../../libs/completePackList";
import updatePackList from "../../_tests_/updatePackList"
import samplePacklist from "../../_tests_/samplePacklist";
import { useState, useReducer, useFormState, useEffect } from "react";
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
  tripId,
  packList,
  handleUpdateForm,
  activeForm
}) {
  // const [formState, dispatch] = useReducer(formReducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialState, setInitialState] = useState(samplePacklist);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isChecked, setIsChecked] = useState(false);
  const [itemsArray, setItemsArray] = useState([]);

  useEffect(() => {
    console.log('samplePacklist: ', samplePacklist);
    updatePackList(initialState);
  }, [initialState]);

  const isDefaultSelected = (category, item) => {
    if (initialState[category] && initialState[category][item] && initialState[category][item] === true) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (category, item, isCheckbox = false) => (e) => {
    const value = isCheckbox ? e.target.checked : e.target.value;
    setInitialState(initialState => ({
      ...initialState,
      [category]: {
        ...initialState[category],
        [item]: value
      }
    }));
    setIsChecked(value);
    console.log(`upon change ${category + item}`, initialState[category][item]);
  };

  const handleSubmit = (formData) => {
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    console.log("initialState submit: ", initialState.Essentials.Cash ? "true" : "false");
  }

  
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
            value={item} 
            defaultSelected={isDefaultSelected(category, item)} 
            onChange={handleChange(category, item, true)}
            // onValueChange={() => setIsSubmitting(true)}
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
        activeForm === "packList" ? "block" : "hidden"
      } flex flex-col overflow-y-scroll`}
      action={handleSubmit}
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
      <div
        id="submit-btn-container"
        className="flex flex-row mt-2 w-full justify-center pt-2"
      >
        <Button
          color="success"
          radius="full"
          className="text-white"
          type="submit"
          disabled={isSubmitting}
          size="sm"
        >
          Update Packing List
        </Button>
      </div>
    </form>
  );
}



  // const handleChange =
  //   (fieldName, isCheckbox = false) =>
  //   (e) => {
  //     const value = isCheckbox ? e.target.checked : e.target.value;
  //     dispatch({ type: "UPDATE_FIELD", fieldName, payload: value });
  //   };

  // const initialState = {
  //   // uuid: uuid,
  //   // tripId: tripId,
  //   stopId: packList._id,
  //   shirts: packList.clothes.shirts,
  //   pants: packList.clothes.pants,
  //   shorts: packList.clothes.shorts,
  //   sweater: packList.clothes.sweater,
  //   underwear: packList.clothes.underwear,
  //   backpack: packList.luggage.backpack,
  //   carryon: packList.luggage.carryon,
  //   dufflebag: packList.luggage.dufflebag,
  //   suitcase: packList.luggage.suitcase,
  //   garmentbag: packList.luggage.garmentbag,
  //   toothbrush: packList.toiletries.toothbrush,
  //   toothpaste: packList.toiletries.toothpaste,
  //   shampoo: packList.toiletries.shampoo,
  //   conditioner: packList.toiletries.conditioner,
  //   sunscreen: packList.toiletries.sunscreen,
  //   cellphone: packList.miscellaneous.cellphone,
  //   laptop: packList.miscellaneous.laptop,
  //   tablet: packList.miscellaneous.tablet,
  //   passport: packList.miscellaneous.passport,
  //   medication: packList.miscellaneous.medication,
  //   firstName: packList.emergencyContact.firstName,
  //   lastName: packList.emergencyContact.lastName,
  //   relationship: packList.emergencyContact.relationship,
  //   phoneNumber: packList.emergencyContact.phoneNumber,
  //   email: packList.emergencyContact.email,
  //   street: packList.emergencyContact.address.street,
  //   city: packList.emergencyContact.address.city,
  //   state: packList.emergencyContact.address.state,
  //   zip: packList.emergencyContact.address.zip,
  //   country: packList.emergencyContact.address.country,
  // };