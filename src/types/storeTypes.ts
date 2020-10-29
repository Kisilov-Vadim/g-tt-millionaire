export type TAction = {
  type: string
  payload?: any
};

export type TInitialState = {
  correctAnswers: number
  questions: TQuestion[] | []
  finished: boolean
}

export type TAnswer = {
  id: string,
  letter: string,
  answer: string
}

export type TQuestion = {
  id: string
  question: string
  answers: TAnswer[]
}
