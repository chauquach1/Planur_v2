import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
const reasons = [
  { label: "Restaurant", value: "Restaurant" },
  { label: "Food", value: "Food" },
  { label: "Landmark", value: "Landmark" },
  { label: "Family", value: "Family" },
  { label: "Friends", value: "Friends" },
  { label: "Museum", value: "Museum" },
  { label: "Attractions", value: "Attractions" },
  { label: "Other", value: "Other" },
];

export default function SelectReason({ setStopType }) {
  return (
      <Select
        label="Stop Type"
        labelPlacement="outside"
        placeholder="Restaurant, Family, etc."
        className="col-span-2"
        variant="faded"
        size="sm"
        onChange={(event) => setStopType(event.target.value)}
      >
        {reasons.map((reason) => (
          <SelectItem key={reason.value} value={reason.value}>
            {reason.label}
          </SelectItem>
        ))}
      </Select>
  );
}
