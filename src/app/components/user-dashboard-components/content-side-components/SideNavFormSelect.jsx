import { Select, SelectItem } from "@nextui-org/react";
export default function SideNavFormSelect({ setActiveForm }) {
  const forms = [
    { label: "Add Accommodation", value: "accommodation" },
    { label: "Add Stop", value: "stop" },
    { label: "Add Emergency Contact", value: "emergencyContact" },
    { label: "Update Packing List", value: "packList" },
  ]
  return (
    <div className="flex flex-row gap-3 whitespace-nowrap text-center text-lg text-gray-600 items-center border-b-2 pb-4">
      <Select
        aria-label="Add New Item"
        className=""
        size="sm"
        variant="flat"
        defaultSelectedKeys={["accommodation"]}
        selectionMode="single"
        radius="full"
        autoFocus={true}
        disallowEmptySelection={true}

      >
        {forms.map((form) => (
          <SelectItem
            key={form.value}
            value={form.value}
            onPress={() => setActiveForm(form.value)}
          >
            {form.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
