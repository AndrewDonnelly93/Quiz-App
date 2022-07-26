import { createSlice } from "@reduxjs/toolkit";
import { IMode } from "../modeComponent/types";
import { RootState } from "../../app/store";
import { Mode } from "../enums/enums";

const initialState: IMode = {
  modeType: Mode.HOME, // home, edit, play,
  quizType: "", // harry-potter
};

const state = {
  modeType: "home", // home, edit, play,
  menuOpen: false,
  timer: 0,
  quizData: {
    gameId: null, // hash
    questionsArray: [],
    quizType: undefined, // harry-potter,
    score: 0,
    streak: 0,
    multiplier: 0.15,
  },
  pastQuizResults: [
    {
      id: 0,
      score: 0,
      highestStreak: 0,
      quizType: undefined,
    },
    {
      id: 1,
      correctChoice: [1],
      chosenAnswer: 1,
    },
  ],
  questionsDB: [
    {
      id: 1,
      question: "What is the name of the quiz?",
      answers: [
        {
          id: 1,
          value: "Answer 1",
          correctChoice: true, // true, false
        },
      ],
      pointsGained: 0,
    },
  ],
};

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.modeType = action.payload;
    },
    changeQuiz: (state, action) => {
      state.quizType = action.payload;
    },
  },
});

export const selectMode = (state: RootState) => state.modeComponent.modeType;
export const selectQuiz = (state: RootState) => state.modeComponent.quizType;

export const { changeMode, changeQuiz } = modeSlice.actions;

export default modeSlice.reducer;
