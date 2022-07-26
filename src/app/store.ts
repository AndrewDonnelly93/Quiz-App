import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import modeReducer from "../features/stores/modeSlice";

export const store = configureStore({
  reducer: {
    modeComponent: modeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
