import { Input } from "@nextui-org/react";

export default function CustomInput(props) {

  const {
    name,
    label,
    placeholder = " ",
    type,
    isRequired,
    labelPlacement = "inside",
    className,
    value,
    onChange,
    onValueChange
  } = props; 

  return (
    <Input
      name={name}
      label={label}
      placeholder={placeholder}
      type={type}
      isRequired={isRequired}
      autoComplete="off"
      variant="faded"
      size="sm"
      labelPlacement={labelPlacement}
      className={className}
      value={value}
      onChange={onChange}
      onValueChange={onValueChange}
    />
  );
}
