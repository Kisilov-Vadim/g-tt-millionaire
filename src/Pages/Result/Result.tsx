import React, { ReactElement } from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Components/Button/Button";
import { TInitialState } from "../../types/storeTypes";
import config from "../../Config.json";
import { restartGame } from "../../store/actions";

export default function Result(): ReactElement {
  const correctAnswers = useSelector((state:TInitialState) => state.correctAnswers);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(restartGame(config.questions));
  };

  return (
    <section className="result">
      <div className="result_main">
        <div className="result_logo">
          <img src="/images/startGame/hand.svg" alt="hand" />
        </div>
        <div className="result_control">
          <div className="result_earned">
            <span className="result_info">Total score:</span>
            <span className="result_money">
              {correctAnswers === 0 ? "$0 " : `${config.prices[correctAnswers - 1]} `}
              earned
            </span>
          </div>
          <Link to="/game">
            <Button title="Try again" onClick={handleClick} />
          </Link>
        </div>
      </div>
    </section>
  );
}
