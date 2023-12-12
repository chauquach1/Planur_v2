import { Input } from "@nextui-org/react";

export default function AccomInput(props) {
  return (
    <Input
      label={props.label}
      placeholder={props.placeholder || " "}
      type={props.type}
      isRequired={props.isRequired}
      autoComplete="off"
      variant="faded"
      size="sm"
      labelPlacement="outside"
      // className=
    />
  );
}
