import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Switch,
  Route,
} from "react-router-dom";
import { setQuestions } from "./store/actions";
import config from "./Config.json";

// components
import StartGame from "./Pages/StartGame/StartGame";
import Game from "./Pages/Game/Game";
import Result from "./Pages/Result/Result";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setQuestions(config.questions));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <StartGame title="Who wants to be a millionaire?" />
        </Route>
        <Route path="/game" exact>
          <Game />
        </Route>
        <Route path="/result" exact>
          <Result />
        </Route>
      </Switch>
    </div>
  );
}
