import { Mode } from "../enums/enums";

export interface IQuizData {
  gameId: string;
  questionsArray: [];
  quizType: string;
  score: number;
  streak: number;
  multiplier: number;
}

export interface IPastQuizResult {
  id: string;
  score: number;
  highestStreak: number;
  quizType: string;
}

export interface IPastQuizQuestionResult {
  id: string;
  correctChoice: [];
  chosenAnswer: number;
}

export interface IAnswer {
  id: string;
  value: string;
  correctChoice: boolean;
}

export interface IQuestion {
  id: string;
  question: string;
  answers: IAnswer[];
  pointsGained: number;
}

export interface IMode {
  modeType: Mode;
  quizType: string;
  // menuOpen: boolean,
  // timer: number,
  // quizData: IQuizData,
  // pastQuizResults: [
  //     IPastQuizResult,
  //     IPastQuizQuestionResult[]
  // ],
  // questionsDB: IQuestion[]
}
