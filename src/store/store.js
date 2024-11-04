import { configureStore } from "@reduxjs/toolkit";
import antavieReducer from "./antavieSlice";

export const store = configureStore({
  reducer: {
    movieData: antavieReducer,
  },
});
