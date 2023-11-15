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
  CheckboxGroup,
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

  // Emergency contact fields
  const emergencyContactFields = [
    { name: "firstName", placeholder: "First Name" },
    { name: "lastName", placeholder: "Last Name" },
    { name: "phoneNumber", placeholder: "Phone Number" },
    { name: "email", placeholder: "Email" },
    { name: "street", placeholder: "Street" },
    { name: "city", placeholder: "City" },
    { name: "state", placeholder: "State" },
    { name: "zip", placeholder: "Zip" },
    { name: "country", placeholder: "Country" },
  ];



  // Function to render checkboxes for a category
  const renderCheckboxGroup = (category, items) => (
    <CheckboxGroup id={`${category}-checkbox-group`} className="ps-2">
    {items.map((item) => (
      <Checkbox
        key={item}
        size="sm"
        value={item} // Use the item itself as the value
        checked={formState[item]} // Use the state to determine if it's checked
        onChange={handleChange(item, true)}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Checkbox>
    ))}
  </CheckboxGroup>
  );

  // Updated renderEmergencyContactInputs
  const renderEmergencyContactInputs = () =>
    emergencyContactFields.map((field) => (
      <Input
        key={field.name}
        label={field.placeholder}
        placeholder={field.placeholder}
        value={formState[field.name]}
        onChange={handleChange(field.name)}
        autoComplete="off"
        variant="faded"
      />
    ));

  const handleSubmit = async (event) => {
    console.log("Submitting form...");
    setIsSubmitting(true);
    setMessage("");

    // Construct the form data object
    const packListDetails = {
      ...formState,
      address: {
        street: formState.street,
        city: formState.city,
        state: formState.state,
        zip: formState.zip,
        country: formState.country,
      },
    };
    
    try {
      console.log("Form data being sent to the server:", packListDetails);
      const response = await fetch(`/api/stops`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(packListDetails),
      });
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Process the response here
      console.log("Stop created:", result);
      setMessage("Stop successfully created!");

      // Reset form fields
      const resetFormFields = () => {
        dispatch({ type: 'RESET_FIELDS' });
      };
      resetFormFields();
      
    } catch (error) {
      console.log("Failed to create pack list:", error);
      setMessage("Failed to create pack list: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    <div id="clothes-checkbox-group" className="p-2">
                      {renderEmergencyContactInputs()}
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
                  Add Stop
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </form>
  );
}
