import { Input } from "@nextui-org/react";

export default function CustomInput(props) {
  return (
      <Input
        label={props.label}
        placeholder={props.placeholder || " "}
        type={props.type}
        isRequired={props.isRequired}
        autoComplete="off"
        variant="faded"
        size="sm"
        labelPlacement={props.labelPlacement || "outside"}
        className={props.className}
      />
  );
}
