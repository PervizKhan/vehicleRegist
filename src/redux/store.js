import { configureStore } from "@reduxjs/toolkit";
import multiStepFormReducer from './slices/multiStepFormSlice'


export const store = configureStore({
  reducer: {
    vehicle: multiStepFormReducer,
  },
});