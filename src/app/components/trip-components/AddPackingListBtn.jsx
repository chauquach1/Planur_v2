import React from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Accordion,
  AccordionItem,
  Checkbox,
} from "@nextui-org/react";
import { useState, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.fieldName]: action.payload };
    case 'RESET_FIELDS':
      return initialState;
    default:
      return state;
  }
};

const initialState = {
  shirts: false,
  pants: false,
  shorts: false,
  sweater: false,
  underwear: false,
  backpack: false,
  carryon: false,
  dufflebag: false,
  suitcase: false,
  garmentbag: false,
  toothbrush: false,
  toothpaste: false,
  shampoo: false,
  conditioner: false,
  sunscreen: false,
  cellphone: false,
  laptop: false,
  tablet: false,
  passport: false,
  medication: false,
  firstName: "",
  lastName: "",
  relationship: "",
  phoneNumber: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};


export default function AddPackingListBtn({ uuid, tripId }) {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  


  const handleChange = (fieldName, isCheckbox = false) => (e) => {
    const value = isCheckbox ? e.target.checked : e.target.value;
    dispatch({ type: 'UPDATE_FIELD', fieldName, payload: value });
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
    <div id={`${category}-checkbox-group`} className="ps-2 grid grid-flow-row gap-2">
      {items.map((item) => (
        <Checkbox
          key={item}
          size="sm"
          value={item} // Use the item itself as the value
          isSelected={formState[item]} // Use the state to determine if it's checked
          onChange={handleChange(item, true)}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Checkbox>
      ))}
    </div>)
  }


  const handleSubmit = async (event) => {
    setIsSubmitting(true);
    setMessage("");

    // Construct the form data object
    const packListDetails = {
      uuid,
      tripId,
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
        }
      }
    };

    try {
      const response = await fetch(`http://localhost:3000/api/packlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packListDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Process the response here
      setMessage("Packing List successfully created!");

      // Reset form fields
      const resetFormFields = () => {
        dispatch({ type: 'RESET_FIELDS' });
      };
      resetFormFields();
      
    } catch (error) {
      setMessage("Failed to create pack list: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  const showFormState = () => {
  }
  return (
    <form onSubmit={handleSubmit}>
      <Button
        size="lg"
        isIconOnly
        className="bg-white w-fit min-w-fit min-h-fit h-fit p-1"
        onPress={onOpen}
        color="primary"
      >
        <MdFormatListBulletedAdd className="fill-blue-400" />
      </Button>
      <Modal
        id="packlist-modal"
        size="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Packing List
              </ModalHeader>
              <ModalBody>
                <Accordion isCompact>
                  {Object.entries(itemCategories).map(
                    ([category, items], index) => (
                      <AccordionItem
                        key={index}
                        aria-label={category}
                        title={
                          category.charAt(0).toUpperCase() + category.slice(1)
                        }
                        onPress={() => showFormState()}
                      >
                        {renderCheckboxGroup(category, items)}
                      </AccordionItem>
                    )
                  )}
                  <AccordionItem
                    key="5"
                    aria-label="Emergency Contact"
                    title="Emergency Contact"
                  >
                    <div
                      id="clothes-checkbox-group"
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
              </ModalBody>
              <ModalFooter>
                <Button
                  size="md"
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  size="md"
                  type="submit"
                  disabled={isSubmitting}
                  color="primary"
                  onPress={handleSubmit}
                >
                  Add Packing List
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
