import { Input, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { postContact, putContact } from "../../_utils/contactsRequestsIndex";

export default function EmergencyContactForm({emergencyContactsProps: {contactsIndex, setContactsIndex, activeContact, setActiveContact, showContactForm, setShowContactForm}, requestProps: {requestType, setRequestType}, tripProps: {tripId}}) {
  const [initialState, setInitialState] = useState(activeContact || {});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const postContactWithTripId = postContact.bind(null, tripId);

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
      const newContact = await postContactWithTripId(initialState);
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
      const updatedContact = await putContact(initialState);
      setInitialState(updatedContact);
      setFormSubmitted(true);
    }
    catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = () => {
    switch (requestType) {
      case "POST":
        createNewContact();
        break;
      case "PUT":
        createNewContact();
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
  

  // FORM VISIBILITY
  const isVisible = showContactForm ? "fixed flex" : "hidden";
  const closeContactForm = () => {
    setActiveContact({});
    setShowContactForm(false);
  }

  return (
    <div
      className={`${isVisible} right-0 top-0 mx-auto
    flex-col h-full w-full md:max-w-[325px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] p-4 pb-2 bg-slate-300 rounded-tl-xl ms-2`}
    >
      <button
        className="self-end text-red-500"
        onClick={closeContactForm}
      >
        x Close
      </button>

      <form
        id="emergency-initialState-form"
        action={handleSubmit}
        // className="grid grid-cols-8 gap-1 bg-white rounded-xl p-2"
        className="flex flex-col gap-2 bg-white rounded-xl p-2"
      >
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
          onChange={(e) =>
            handleNestedInputChange("address", "street", e.target.value)
          }
          autoComplete="off"
          variant="faded"
          size="sm"
          className="col-span-5"
        />
        <Input
          key="city"
          label="City"
          value={initialState.address ? initialState.address.city : ""}
          onChange={(e) =>
            handleNestedInputChange("address", "city", e.target.value)
          }
          autoComplete="off"
          variant="faded"
          size="sm"
          className="col-span-3"
        />
        <Input
          key="state"
          label="State"
          value={initialState.address ? initialState.address.state : ""}
          onChange={(e) =>
            handleNestedInputChange("address", "state", e.target.value)
          }
          autoComplete="off"
          variant="faded"
          size="sm"
          className="col-span-2"
        />
        <Input
          key="zip"
          label="Zip"
          value={initialState.address ? initialState.address.zip : ""}
          onChange={(e) =>
            handleNestedInputChange("address", "zip", e.target.value)
          }
          autoComplete="off"
          variant="faded"
          size="sm"
          className="col-span-3"
        />
        <Input
          key="country"
          label="Country"
          value={initialState.address ? initialState.address.country : ""}
          onChange={(e) =>
            handleNestedInputChange("address", "country", e.target.value)
          }
          autoComplete="off"
          variant="faded"
          size="sm"
          className="col-span-3"
        />
        <div
          id="submit-btn-container"
          className="flex flex-row mt-2 w-full justify-center pt-2"
        >
          <Button
            color="success"
            radius="full"
            className="text-white"
            type="submit"
            // disabled={isSubmitting}
            size="sm"
          >
            {requestType === "POST"
              ? "Add Emergency Contact"
              : "Update Emergency Contact"}
          </Button>
        </div>
      </form>
    </div>
  );
}
