import { ChangeEventHandler } from "react";

interface FormInputProps {
  id?: string;
  name?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function FormInput(props: FormInputProps) {
  return (
    <input
      id={props.id}
      name={props.name || props.id}
      onChange={props.onChange}
    />
  );
}
