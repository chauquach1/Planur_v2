import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const accoms = [
  { label: "Hotel", value: "Hotel" },
  { label: "Vacation Rental", value: "Vacation Rental" },
  { label: "Resort", value: "Resort" },
  { label: "Hostel", value: "Hostel" },
  { label: "Other", value: "Other" },
];

export default function SelectAccom({ setAccomType }) {
  return (
      <Select
        label="Accommodation Type"
        placeholder="Select an Accommodation"
        className="col-span-3"
        size="md"
        variant="faded"
        onChange={(event) => setAccomType(event.target.value)}
      >
        {accoms.map((accom) => (
          <SelectItem key={accom.value} value={accom.value}>
            {accom.label}
          </SelectItem>
        ))}
      </Select>
  );
}
