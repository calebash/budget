import { PropsWithChildren } from "react";

interface FormLabelProps {
  id?: string;
}

export default function FormLabel(props: PropsWithChildren<FormLabelProps>) {
  return <label htmlFor={props.id}>{props.children}</label>;
}
