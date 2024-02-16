import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
export default function EmergencyContactForm({emergencyContactsProps: {contactsIndex, setContactsIndex, activeContact, setActiveContact, showContactForm, setShowContactForm}, requestProps}) {
  const [initialState, setInitialState] = useState(activeContact || {});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setInitialState(activeContact);
  }, [activeContact]);


  // UPDATE STATE ACCOM INDEX
  const updateContactsIndex = (contactId, newState) => {
    // Clone the existing contactsIndex to ensure immutability
    const updatedContactsIndex = [contactsIndex];

    // Find the index of the contact with the given accomId
    const index = updatedContactsIndex.findIndex(
      (contact) => contact._id === contactId
    );

    if (index !== -1) {
      // If the contact exists, update it
      updatedContactsIndex[index] = newState;
    } else {
      // If the contact does not exist, add it
      updatedContactsIndex.push(newState);
    }

    // Update the state with the new contacts array
    setContactsIndex(updatedContactsIndex);
  };

  // ASYNC POST/PUT REQUEST FUNCTIONS

  const createNewContact = async () => {
    try {
      const newContact = await postAccomWithTripId(initialState);
      console.log(newContact);
      setInitialState(newContact);
      setFormSubmitted(true);
    } catch (err) {
      console.log(err);
      setFormSubmitted(false);
    }
  };

  const updateContact = async () => {
    try {
      const updatedContact = await putAccom(initialState);
      setInitialState(updatedContact);
      setFormSubmitted(true);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    switch (requestProps.requestType) {
      case "POST":
        createNewContact();
        break;
      case "PUT":
        updateContact();
        break;
      default:
        console.log("Request type not found");
    }
  };


  // FORM SUBMISSION STATE STATUS
  useEffect(() => {
    if (formSubmitted) {
      updateContactsIndex(initialState._id, initialState);
      setFormSubmitted(false);
    }
  }, [formSubmitted]);


  // HANDLE INPUT CHANGE FUNCTIONS
  const handleInputChange = (key, value) => {
    setInitialState(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleNestedInputChange = (parentKey, childKey, value) => {
    setInitialState(prevState => ({
      ...prevState,
      [parentKey]: {
        ...prevState[parentKey],
        [childKey]: value
      }
    }));
  };

  // FORM VISIBILITY CONDITIONAL
  const isVisible = showContactForm ? "fixed flex" : "hidden";

  return (
    <div id="emergency-initialState-form" className="grid grid-cols-8 p-1 gap-1">
      <Input
        key="firstName"
        label="First Name"
        value={initialState.firstName || ""}
        onChange={(e) => handleInputChange("firstName", e.target.value)}  
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="lastName"
        label="Last Name"
        value={initialState.lastName || ""}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="relationship"
        label="Relationship"
        value={initialState.relationship || ""}
        onChange={(e) => handleInputChange("relationship", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="phoneNumber"
        label="Phone Number"
        value={initialState.phoneNumber || ""}
        onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="email"
        label="Email"
        value={initialState.email || ""}
        onChange={(e) => handleInputChange("email", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="street"
        label="Street"
        value={initialState.address ? initialState.address.street : ""}
        onChange={(e) => handleNestedInputChange("address", "street", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-5"
      />
      <Input
        key="city"
        label="City"
        value={initialState.address ? initialState.address.city : ""}
        onChange={(e) => handleNestedInputChange("address", "city", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="state"
        label="State"
        value={initialState.address ? initialState.address.state : ""}
        onChange={(e) => handleNestedInputChange("address", "state", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="zip"
        label="Zip"
        value={initialState.address ? initialState.address.zip : ""}
        onChange={(e) => handleNestedInputChange("address", "zip", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="country"
        label="Country"
        value={initialState.address ? initialState.address.country : ""}
        onChange={(e) => handleNestedInputChange("address", "country", e.target.value)}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
    </div>
  );
}
