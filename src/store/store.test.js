/* eslint-disable no-undef */
// import React from "react";
import { initialState } from "./store";
import { storeFactory } from "../testUtilits/index";
import {
  setCorrectAnswers, setFinished, setQuestions, restartGame,
} from "./actions";
import config from "../Config.json";

describe("test redux actions", () => {
  let store;
  beforeEach(() => {
    store = storeFactory(initialState);
  });

  test("test questions action", () => {
    store.dispatch(setCorrectAnswers());
    const expected = store.getState().correctAnswers;
    expect(expected).toBe(1);
  });

  test("test finished game action", () => {
    store.dispatch(setFinished(true));
    const expected = store.getState().finished;
    expect(expected).toBeTruthy();
  });

  test("test setQuestions action", () => {
    const { questions } = config;
    store.dispatch(setQuestions(questions));
    const expected = store.getState().questions;
    expect(expected).toEqual(questions);
  });

  test("restart game action", () => {
    const state = {
      questions: [],
      correctAnswers: 7,
      finished: true,
    };
    store = storeFactory(state);
    store.dispatch(restartGame(config.questions));
    const expected = store.getState();
    const correctStore = {
      questions: config.questions,
      correctAnswers: 0,
      finished: false,
    };
    expect(expected).toEqual(correctStore);
  });
});
