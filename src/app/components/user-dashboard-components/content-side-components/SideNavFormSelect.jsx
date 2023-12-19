import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { set } from "date-fns";
import { useState } from "react";
import React from "react";
export default function SideNavFormSelect({ activeForm, setActiveForm }) {
  const forms = [
    { label: "Accommodation", value: "accommodation" },
    { label: "Stop", value: "stop" },
    { label: "Emergency Contact", value: "emergencyContact" },
  ]
  const [value, setValue] = useState(forms.value);
  return (
    <Select
      label="Add New Item"
      className="text-center border-b-0"
      size="sm"
      variant="underlined"
      radius="lg"
      defaultSelectedKeys={["accommodation"]}
      selectionMode="single"
      autoFocus={true}
      disallowEmptySelection={true}
    >
      {forms.map((form) => (
        <SelectItem key={form.value} value={form.value} onPress={() => setActiveForm(form.value)}>
          {form.label}
        </SelectItem>
      ))}
    </Select>
  );
}
