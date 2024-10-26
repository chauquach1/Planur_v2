import { configureStore } from "@reduxjs/toolkit";
import tripsIndexReducer from "../redux/features/tripsIndex/tripsIndexSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      tripsIndex: tripsIndexReducer
    },
  })
}