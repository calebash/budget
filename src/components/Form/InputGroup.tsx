import { Children, cloneElement, PropsWithChildren, ReactElement } from "react";

interface InputGroupProps {
  id: string;
}

export default function InputGroup(props: PropsWithChildren<InputGroupProps>) {
  return (
    <div>
      {Children.map(props.children as ReactElement<any>, (el) => {
        const id: string = el.props.id || props.id;
        return cloneElement(el, { id });
      })}
    </div>
  );
}
