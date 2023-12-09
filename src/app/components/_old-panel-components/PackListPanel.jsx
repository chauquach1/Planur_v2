import { set } from "date-fns";
import { useState, useReducer } from "react";
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

export default function PackListPanel({
  uuid,
  tripId,
  currCardData,
  handleUpdateForm,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const initialState = {
    uuid: uuid,
    tripId: tripId,
    stopId: currCardData._id,
    shirts: currCardData.clothes.shirts,
    pants: currCardData.clothes.pants,
    shorts: currCardData.clothes.shorts,
    sweater: currCardData.clothes.sweater,
    underwear: currCardData.clothes.underwear,
    backpack: currCardData.luggage.backpack,
    carryon: currCardData.luggage.carryon,
    dufflebag: currCardData.luggage.dufflebag,
    suitcase: currCardData.luggage.suitcase,
    garmentbag: currCardData.luggage.garmentbag,
    toothbrush: currCardData.toiletries.toothbrush,
    toothpaste: currCardData.toiletries.toothpaste,
    shampoo: currCardData.toiletries.shampoo,
    conditioner: currCardData.toiletries.conditioner,
    sunscreen: currCardData.toiletries.sunscreen,
    cellphone: currCardData.miscellaneous.cellphone,
    laptop: currCardData.miscellaneous.laptop,
    tablet: currCardData.miscellaneous.tablet,
    passport: currCardData.miscellaneous.passport,
    medication: currCardData.miscellaneous.medication,
    firstName: currCardData.emergencyContact.firstName,
    lastName: currCardData.emergencyContact.lastName,
    relationship: currCardData.emergencyContact.relationship,
    phoneNumber: currCardData.emergencyContact.phoneNumber,
    email: currCardData.emergencyContact.email,
    street: currCardData.emergencyContact.address.street,
    city: currCardData.emergencyContact.address.city,
    state: currCardData.emergencyContact.address.state,
    zip: currCardData.emergencyContact.address.zip,
    country: currCardData.emergencyContact.address.country,
  };

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

  const [formState, dispatch] = useReducer(formReducer, initialState);

  const handleChange =
    (fieldName, isCheckbox = false) =>
    (e) => {
      const value = isCheckbox ? e.target.checked : e.target.value;
      dispatch({ type: "UPDATE_FIELD", fieldName, payload: value });
    };

  // Item categories
  const itemCategories = {
    clothes: ["shirts", "pants", "shorts", "sweater", "underwear"],
    luggage: ["backpack", "carryon", "dufflebag", "suitcase", "garmentbag"],
    toiletries: [
      "toothbrush",
      "toothpaste",
      "shampoo",
      "conditioner",
      "sunscreen",
    ],
    miscellaneous: ["cellphone", "laptop", "tablet", "passport", "medication"],
  };

  // Function to render checkboxes for a category
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
            value={item} // Use the item itself as the value
            isSelected={formState[item]} // Use the state to determine if it's checked
            onChange={handleChange(item, true)}
            onValueChange={() => setIsSubmitting(true)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Checkbox>
        ))}
      </div>
    );
  };

  const handleSubmit = async (event) => {
    setIsSubmitting(true);
    setMessage("");

    const updatedPackListDetails = {
      uuid,
      tripId,
      packListId: currCardData._id,
      clothes: {
        shirts: formState.shirts,
        pants: formState.pants,
        shorts: formState.shorts,
        sweater: formState.sweater,
        underwear: formState.underwear,
      },
      luggage: {
        backpack: formState.backpack,
        carryon: formState.carryon,
        dufflebag: formState.dufflebag,
        suitcase: formState.suitcase,
        garmentbag: formState.garmentbag,
      },
      toiletries: {
        toothbrush: formState.toothbrush,
        toothpaste: formState.toothpaste,
        shampoo: formState.shampoo,
        conditioner: formState.conditioner,
        sunscreen: formState.sunscreen,
      },
      miscellaneous: {
        cellphone: formState.cellphone,
        laptop: formState.laptop,
        tablet: formState.tablet,
        passport: formState.passport,
        medication: formState.medication,
      },
      emergencyContact: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        relationship: formState.relationship,
        phoneNumber: formState.phoneNumber,
        email: formState.email,
        address: {
          street: formState.street,
          city: formState.city,
          state: formState.state,
          zip: formState.zip,
          country: formState.country,
        },
      },
    };

    try {
      const response = await fetch(`https://planur-v2.vercel.app/api/packlist`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPackListDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      handleUpdateForm(result, 'packLists');
      setMessage("Packing List successfully created!");

    } catch (error) {
      setMessage("Failed to create pack list: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <form className="flex flex-col h-full w-full">
      <div
        id="accordion-container"
        className="grow bg-white/60 rounded-xl overflow-scroll "
      >
        <div
          id="accordion-container"
          className="grow rounded-xl overflow-scroll p-2"
        >
          <Accordion isCompact selectionMode="multiple">
            {Object.entries(itemCategories).map(([category, items], index) => (
              <AccordionItem
                key={index}
                aria-label={category}
                title={category.charAt(0).toUpperCase() + category.slice(1)}
              >
                {renderCheckboxGroup(category, items)}
              </AccordionItem>
            ))}
            <AccordionItem
              key="5"
              aria-label="Emergency Contact"
              title="Emergency Contact"
            >
              <div
                id="emergency-contact-group"
                className="grid grid-cols-8 p-1 gap-1"
              >
                <Input
                  key="firstName"
                  label="First Name"
                  value={formState["firstName"]}
                  onChange={handleChange("firstName")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-3"
                />
                <Input
                  key="lastName"
                  label="Last Name"
                  value={formState["lastName"]}
                  onChange={handleChange("lastName")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-3"
                />
                <Input
                  key="relationship"
                  label="Relationship"
                  value={formState["relationship"]}
                  onChange={handleChange("relationship")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-2"
                />
                <Input
                  key="phoneNumber"
                  label="Phone Number"
                  value={formState["phoneNumber"]}
                  onChange={handleChange("phoneNumber")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-4"
                />
                <Input
                  key="email"
                  label="Email"
                  value={formState["email"]}
                  onChange={handleChange("email")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-4"
                />
                <Input
                  key="street"
                  label="Street"
                  value={formState["street"]}
                  onChange={handleChange("street")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-5"
                />
                <Input
                  key="city"
                  label="City"
                  value={formState["city"]}
                  onChange={handleChange("city")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-3"
                />
                <Input
                  key="state"
                  label="State"
                  value={formState["state"]}
                  onChange={handleChange("state")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-2"
                />
                <Input
                  key="zip"
                  label="Zip"
                  value={formState["zip"]}
                  onChange={handleChange("zip")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-3"
                />
                <Input
                  key="country"
                  label="Country"
                  value={formState["country"]}
                  onChange={handleChange("country")}
                  autoComplete="off"
                  variant="faded"
                  size="sm"
                  className="col-span-3"
                />
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div id="submit-btn-container" className="flex flex-row justify-end mt-2 w-full">
        <Button
          isDisabled={!isSubmitting}
          size="sm"
          variant={isSubmitting ? "solid" : "default"}
          color="primary"
          onPress={handleSubmit}
        >
          {isSubmitting? 'Submit' : null}
        </Button>
      </div>
    </form>
  );
}
