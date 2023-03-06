interface FormInputProps {
  id?: string;
  name?: string;
}

export default function FormInput(props: FormInputProps) {
  return <input id={props.id} name={props.name || props.id} />;
}
