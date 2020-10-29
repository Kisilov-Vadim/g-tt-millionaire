import React, { ReactElement } from "react";
import "./Button.css";

interface Props {
  title: string
  onClick: () => void
}

export default function Button({ title, onClick }: Props): ReactElement {
  return (
    <button
      type="button"
      className="mainButton"
      onClick={() => onClick()}
      data-test={`${title}`}
    >
      { title }
    </button>
  );
}
