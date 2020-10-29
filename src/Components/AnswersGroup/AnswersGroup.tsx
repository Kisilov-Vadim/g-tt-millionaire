/* eslint-disable no-unused-vars */
import React, {
  memo, ReactElement, useEffect, useState,
} from "react";
import { TQuestion } from "../../types/storeTypes";
import Answer from "../Answer/Answer";
import config from "../../Config.json";

interface Props {
  currentQuestion: TQuestion | null
  handleAnswer: (success:boolean) => void
}

function AnswersGroup({ currentQuestion, handleAnswer }: Props): ReactElement {
  const [selected, setSelected] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");
  const correctAnswer = config.correctAnswers
    .find((item) => item.id === currentQuestion?.id)?.answer;

  useEffect(() => {
    if (!selected) return;

    if (status === "selected") {
      setTimeout(() => {
        if (correctAnswer?.includes(selected.toUpperCase())) {
          setStatus("correct");
        } else {
          setStatus("wrong");
        }
      }, 1000);
    }

    if (status === "correct" || status === "wrong") {
      setTimeout(() => {
        setSelected(null);
        setStatus("");
        handleAnswer(status === "correct");
      }, 1000);
    }
  }, [selected, status, correctAnswer, handleAnswer]);

  const handleAnswerClick = (letter:string):void => {
    setSelected(letter);
    setStatus("selected");
  };

  return (
    <div className="game_answers" data-test="group-container">
      {
        currentQuestion && currentQuestion.answers.map((item) => (
          <Answer
            key={item.id}
            letter={item.letter}
            onClick={handleAnswerClick}
            selected={selected}
            status={selected === item.letter ? status : ""}
          >
            {item.answer}
          </Answer>
        ))
      }
    </div>
  );
}

export default memo(AnswersGroup);
