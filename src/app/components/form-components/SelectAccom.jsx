import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

const accoms = [
  { label: "Hotel", value: "Hotel" },
  { label: "Resort", value: "Resort" },
  { label: "Vacation Rental", value: "Vacation Rental" },
  { label: "Friends/Family", value: "Friends/Family"},
  { label: "Hostel", value: "Hostel" },
  { label: "Other", value: "Other" },
];

export default function SelectAccom(props) {

  return (
    <Select
      name="accomType"
      label="Accommodation"
      labelPlacement="inside"
      placeholder="Type"
      className="col-span-3"
      size="sm"
      variant="faded"
      selectedKeys={props.accomType ? [props.accomType] : []}
      onChange={(event) => props.setAccomType(event.target.value)}
    >
      {accoms.map((accom) => (
        <SelectItem key={accom.value} value={accom.value}>
          {accom.label}
        </SelectItem>
      ))}
    </Select>
  );
}
