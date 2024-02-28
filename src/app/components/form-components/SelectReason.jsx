import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const reasons = [
  { label: "Family", value: "Family" },
  { label: "Vacation", value: "Vacation" },
  { label: "Business", value: "Business" },
  { label: "Other", value: "Other" },
];

export default function SelectReason({ setReason }) {
  return (
      <Select
        label="Reason for Travel"
        placeholder="Select an reason"
        className=""
        size="sm"
        onChange={(event) => setReason(event.target.value)}
      >
        {reasons.map((reason) => (
          <SelectItem key={reason.value} value={reason.value}>
            {reason.label}
          </SelectItem>
        ))}
      </Select>
  );
}
