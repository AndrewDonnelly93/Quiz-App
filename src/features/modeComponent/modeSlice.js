import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modeType: 'home', // home, edit, play,
  quizType: undefined, // harry-potter
};

export const modeSlice = createSlice({
  name: 'mode',
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

export const selectMode = (state) => state.modeComponent.modeType;
export const selectQuiz = (state) => state.modeComponent.quizType;

export const { changeMode, changeQuiz } = modeSlice.actions;

export default modeSlice.reducer;
