import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "home", // home, play, edit
  menuOpen: false, // true, false
};

export const playingScreenSlice = createSlice({
  name: "playingScreen",
  initialState,
  reducers: {},
});

export default playingScreenSlice.reducer;
