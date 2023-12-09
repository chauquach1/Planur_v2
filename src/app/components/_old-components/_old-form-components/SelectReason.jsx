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
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Reason for Travel"
        placeholder="Select an reason"
        className="max-w-xs"
        size="sm"
        onChange={(event) => setReason(event.target.value)}
      >
        {reasons.map((reason) => (
          <SelectItem key={reason.value} value={reason.value}>
            {reason.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
