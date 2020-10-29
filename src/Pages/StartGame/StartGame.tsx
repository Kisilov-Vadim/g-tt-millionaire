import React, { ReactElement } from "react";
import "./StartGame.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import config from "../../Config.json";

// components
import Button from "../../Components/Button/Button";

// types
import { TInitialState } from "../../types/storeTypes";
import { restartGame } from "../../store/actions";

type TProps = {
  title: string
}

export default function StartGame({ title }:TProps): ReactElement {
  const history = useHistory();
  const dispatch = useDispatch();
  const finished = useSelector((state:TInitialState) => state.finished);

  const handleClick = () => {
    if (finished) {
      dispatch(restartGame(config.questions));
    }
    history.push("/game");
  };

  return (
    <section className="startGame">
      <div className="startGame_background" />
      <div className="startGame_main">
        <div className="startGame_logo">
          <img src="/images/startGame/hand.svg" alt="hand" />
        </div>
        <div className="startGame_control">
          <h1>{title}</h1>
          <Button title="Start" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
