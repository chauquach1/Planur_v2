import { configureStore } from "@reduxjs/toolkit";
import tripsIndexReducer from "./features/tripsIndex/tripsIndexSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      setTripsIndex: tripsIndexReducer
    },
  })
}