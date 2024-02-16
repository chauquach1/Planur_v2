import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
export default function EmergencyContactForm({emergencyContactsProps: {initialStatesIndex, setContactsIndex, activeContact, setActiveContact, showContactForm, setShowContactForm}}) {
  const [initialState, setInitialState] = useState(activeContact || {});

  useEffect(() => {
    setInitialState(activeContact);
  }, [activeContact]);

  return (
    <div id="emergency-initialState-form" className="grid grid-cols-8 p-1 gap-1">
      <Input
        key="firstName"
        label="First Name"
        value={initialState.firstName || ""}
        // onChange={handleChange("firstName")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="lastName"
        label="Last Name"
        value={initialState.lastName || ""}
        // onChange={handleChange("lastName")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="relationship"
        label="Relationship"
        value={initialState.relationship || ""}
        // onChange={handleChange("relationship")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="phoneNumber"
        label="Phone Number"
        value={initialState.phoneNumber || ""}
        // onChange={handleChange("phoneNumber")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="email"
        label="Email"
        value={initialState.email || ""}
        // onChange={handleChange("email")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="street"
        label="Street"
        value={initialState.address ? initialState.address.street : ""}
        // onChange={handleChange("street")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-5"
      />
      <Input
        key="city"
        label="City"
        value={initialState.address ? initialState.address.city : ""}
        // onChange={handleChange("city")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="state"
        label="State"
        value={initialState.address ? initialState.address.state : ""}
        // onChange={handleChange("state")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="zip"
        label="Zip"
        value={initialState.address ? initialState.address.zip : ""}
        // onChange={handleChange("zip")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="country"
        label="Country"
        value={initialState.address ? initialState.address.country : ""}
        // onChange={handleChange("country")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
    </div>
  );
}
