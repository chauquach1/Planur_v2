import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
const levels = [
  { label: "Must-Go", value: "Must-Go" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
  { label: "Indifferent", value: "Indifferent" },
  { label: "Other", value: "Other" },
];

export default function SelectInterest(props) {
  return (
      <Select
        label="Interest Level"
        placeholder="Must-go, High, etc."
        className="col-span-2"
        size="sm"
        variant="faded"
        selectedKeys={props.stopInterest ? [props.stopInterest] : []}
        onChange={(event) => props.handleInputChange('stopInterest', event.target.value)}
      >
        {levels.map((level) => (
          <SelectItem key={level.value} value={level.value}>
            {level.label}
          </SelectItem>
        ))}
      </Select>
  );
}
