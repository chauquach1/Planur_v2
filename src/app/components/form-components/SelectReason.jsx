import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const reasons = [
  { label: "Family", value: "Family" },
  { label: "Vacation", value: "Vacation" },
  { label: "Business", value: "Business" },
  { label: "Other", value: "Other" },
];

export default function SelectReason({ onChange }) {
  return (
      <Select
        label="Reason for Travel"
        placeholder="Select an reason"
        className=""
        size="sm"
        onChange={onChange}
      >
        {reasons.map((reason) => (
          <SelectItem key={reason.value} value={reason.value}>
            {reason.label}
          </SelectItem>
        ))}
      </Select>
  );
}
