import { TQuestion } from "../types/storeTypes";

export const ACTIONS = {
  SET_QUESTIONS: "SET_QUESTIONS",
  SET_CORRECT_ANSWERS: "SET_CORRECT_ANSWERS",
  RESTART_GAME: "RESTART_GAME",
  SET_FINISHED: "SET_FINISHED",
};

export const setQuestions = (payload:TQuestion[]) => ({ type: ACTIONS.SET_QUESTIONS, payload });
export const setCorrectAnswers = () => ({ type: ACTIONS.SET_CORRECT_ANSWERS });
export const restartGame = (payload:TQuestion[]) => ({ type: ACTIONS.RESTART_GAME, payload });
export const setFinished = (payload: boolean) => ({ type: ACTIONS.SET_FINISHED, payload });
