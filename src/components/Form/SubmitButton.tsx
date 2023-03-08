import { MouseEventHandler } from "react";

interface SubmitButtonProps {
  onClick: MouseEventHandler;
}

export default function SubmitButton(props: SubmitButtonProps) {
  return (
    <button type="submit" onClick={props.onClick}>
      Submit
    </button>
  );
}
