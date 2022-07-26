import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "home", // home, play, edit
  menuOpen: false, // true, false
};

export const greetingScreenSlice = createSlice({
  name: "greetingScreen",
  initialState,
  reducers: {},
});

export default greetingScreenSlice.reducer;
