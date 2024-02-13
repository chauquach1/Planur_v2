import { Input } from "@nextui-org/react";

export default function CustomInput(props) {
  return (
      <Input
        name={props.name}
        label={props.label}
        placeholder={props.placeholder || " "}
        type={props.type}
        isRequired={props.isRequired}
        autoComplete="off"
        variant="faded"
        size="sm"
        labelPlacement={props.labelPlacement || "inside"}
        className={props.className}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={props.onChange}
        onValueChange={props.onValueChange}
      />
  );
}
