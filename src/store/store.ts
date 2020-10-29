import { createStore } from "redux";
import { TAction, TInitialState } from "../types/storeTypes";
import { ACTIONS } from "./actions";

export const initialState:TInitialState = {
  questions: [],
  correctAnswers: 0,
  finished: false,
};

export const reducer = (state:TInitialState = initialState, action:TAction) => {
  switch (action.type) {
    case ACTIONS.SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case ACTIONS.SET_CORRECT_ANSWERS:
      return { ...state, correctAnswers: state.correctAnswers + 1 };
    case ACTIONS.RESTART_GAME:
      return {
        ...state, correctAnswers: 0, questions: action.payload, finished: false,
      };
    case ACTIONS.SET_FINISHED:
      return { ...state, finished: action.payload };
    default:
      return state;
  }
};

export default createStore(reducer);
