import { TQuestion } from "../types/storeTypes";

const getRandomPos = (max:number):number => Math.floor(Math.random() * (max - 0) + 0);

export default function getCurrentQuestion(questions: TQuestion[]):TQuestion {
  // eslint-disable-next-line prefer-destructuring
  const length = questions.length;
  const randomPos = getRandomPos(length);
  return questions[randomPos];
}
