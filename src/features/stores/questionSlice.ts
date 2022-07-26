import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "home", // home, play, edit
  menuOpen: false, // true, false
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {},
});

export default questionSlice.reducer;
