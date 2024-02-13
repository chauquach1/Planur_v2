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

export default function SelectReason(props) {
  return (
      <Select
        label="Stop Type"
        placeholder="Restaurant, Family, etc."
        className="col-span-2"
        size="sm"
        variant="faded"
        selectedKeys={props.stopType ? [props.stopType] : []}
        onChange={(event) => props.handleInputChange('stopType', event.target.value)}
      >
        {reasons.map((reason) => (
          <SelectItem key={reason.value} value={reason.value}>
            {reason.label}
          </SelectItem>
        ))}
      </Select>
  );
}
