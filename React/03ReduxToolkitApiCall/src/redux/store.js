import { configureStore } from "@reduxjs/toolkit";
import commentReducer from "./slices/comments";

export const store = configureStore({
  reducer: {
    comment: commentReducer,
  },
});
