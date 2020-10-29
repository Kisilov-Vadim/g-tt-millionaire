/* eslint-disable no-unused-vars */
import React, { ReactElement } from "react";
import "./Answer.css";

interface Props {
  children: string
  letter: string
  onClick: (id:string) => void
  selected: string | null
  status: string
}

export default function Answer({
  children, letter, onClick, selected, status,
}: Props): ReactElement {
  const handleClick = () => {
    if (selected) return;
    onClick(letter);
  };

  return (
    <button
      type="button"
      className={`answer ${status}`}
      onClick={handleClick}
      data-test={`${status}`}
    >
      <svg width="420" height="76" viewBox="0 0 405 72" data-test="borderSvg">
        <path d="M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z" fill="white" />
      </svg>
      <p className="answer_info" data-test={`${children}`}>
        <span className="answer_letter" data-test={`${letter}`}>{letter}</span>
        {children}
      </p>
    </button>
  );
}
