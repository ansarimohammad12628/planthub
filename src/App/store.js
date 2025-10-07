import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from "../Features/userSlice.js";

export const store = configureStore({
  reducer: {
    plantshop: plantsReducer,
  },
});
