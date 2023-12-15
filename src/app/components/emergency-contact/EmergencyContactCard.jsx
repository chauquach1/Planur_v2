import { Input } from "@nextui-org/react";
export default function EmergencyContactCard({ handleChange }) {
  return (
    <div id="emergency-contact-group" className="grid grid-cols-8 p-1 gap-1">
      <Input
        key="firstName"
        label="First Name"
        // value={formState["firstName"]}
        onChange={handleChange("firstName")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="lastName"
        label="Last Name"
        // value={formState["lastName"]}
        onChange={handleChange("lastName")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="relationship"
        label="Relationship"
        // value={formState["relationship"]}
        onChange={handleChange("relationship")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="phoneNumber"
        label="Phone Number"
        // value={formState["phoneNumber"]}
        onChange={handleChange("phoneNumber")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="email"
        label="Email"
        // value={formState["email"]}
        onChange={handleChange("email")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-4"
      />
      <Input
        key="street"
        label="Street"
        // value={formState["street"]}
        onChange={handleChange("street")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-5"
      />
      <Input
        key="city"
        label="City"
        // value={formState["city"]}
        onChange={handleChange("city")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="state"
        label="State"
        // value={formState["state"]}
        onChange={handleChange("state")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-2"
      />
      <Input
        key="zip"
        label="Zip"
        // value={formState["zip"]}
        onChange={handleChange("zip")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
      <Input
        key="country"
        label="Country"
        // value={formState["country"]}
        onChange={handleChange("country")}
        autoComplete="off"
        variant="faded"
        size="sm"
        className="col-span-3"
      />
    </div>
  );
}
