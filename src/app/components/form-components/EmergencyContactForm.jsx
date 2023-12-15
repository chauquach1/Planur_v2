import { Input } from "@nextui-org/react";
export default function EmergencyContactForm({ contact }) {
  const address = contact.address;
  return (
    <div id="emergency-contact-form" className="grid grid-cols-8 p-1 gap-1">
      <Input
        key="firstName"
        label="First Name"
        value={contact.firstName}
        // onChange={handleChange("firstName")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="lastName"
        label="Last Name"
        value={contact.lastName}
        // onChange={handleChange("lastName")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="relationship"
        label="Relationship"
        value={contact.relationship}
        // onChange={handleChange("relationship")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="phoneNumber"
        label="Phone Number"
        value={contact.phoneNumber}
        // onChange={handleChange("phoneNumber")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="email"
        label="Email"
        value={contact.email}
        // onChange={handleChange("email")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="street"
        label="Street"
        value={address.street}
        // onChange={handleChange("street")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-5"
      />
      <Input
        key="city"
        label="City"
        value={address.city}
        // onChange={handleChange("city")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="state"
        label="State"
        value={address.state}
        // onChange={handleChange("state")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="zip"
        label="Zip"
        value={address.zip}
        // onChange={handleChange("zip")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="country"
        label="Country"
        value={address.country}
        // onChange={handleChange("country")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
    </div>
  );
}
