/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactElement, useEffect, useState } from "react";
import "./Game.css";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import getCurrentQuestion from "../../utilits/getCurrentQuestion";
import { setCorrectAnswers, setFinished, setQuestions } from "../../store/actions";
import config from "../../Config.json";

// types
import { TInitialState, TQuestion } from "../../types/storeTypes";

// components
import GameScore from "../../Components/GameScore/GameScore";
import StartGame from "../StartGame/StartGame";
import AnswersGroup from "../../Components/AnswersGroup/AnswersGroup";
import Loader from "../../Components/Loader/Loader";

export default function Game(): ReactElement {
  const dispatch = useDispatch();
  const history = useHistory();

  // redux
  const questions = useSelector((state:TInitialState) => state.questions);
  const finished = useSelector((state:TInitialState) => state.finished);
  const correctAnswers = useSelector((state:TInitialState) => state.correctAnswers);

  // state
  const [currentQuestion, setCurrentQuestion] = useState<TQuestion | null>(null);

  useEffect(() => {
    setCurrentQuestion(getCurrentQuestion(questions));
  }, [questions]);

  const handleSuccess = () => {
    // remove past question from all questions arr
    const newQuestions = [...questions];
    const index = newQuestions.findIndex((item) => item.id === currentQuestion?.id);
    newQuestions.splice(index, 1);
    dispatch(setCorrectAnswers());

    // check if last question
    if (correctAnswers === config.prices.length - 1) {
      history.push("/result");
      dispatch(setFinished(true));
    } else {
      dispatch(setQuestions(newQuestions));
    }
  };

  const handleFailed = () => {
    history.push("/result");
    dispatch(setFinished(true));
  };

  const handleAnswer = (success:boolean) => {
    if (success) {
      handleSuccess();
    } else {
      handleFailed();
    }
  };

  if (finished) {
    return (
      <StartGame title="The previous game was over" />
    );
  }

  if (!currentQuestion) {
    return (
      <Loader />
    );
  }

  return (
    <section className="game">
      <div className="game_playGround">
        <h1 className="game_question">{currentQuestion.question}</h1>
        <AnswersGroup
          currentQuestion={currentQuestion}
          handleAnswer={handleAnswer}
        />
      </div>
      <div className="game_menu">
        <input type="checkbox" id="toggle_menu" />
        <label className="game_menuToggle" htmlFor="toggle_menu">
          <span />
        </label>
        <GameScore />
      </div>
    </section>
  );
}
