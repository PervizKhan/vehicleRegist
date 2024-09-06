import { configureStore } from "@reduxjs/toolkit";
import stepOneReducer from "../features/vehicle/stepOneSlice";
import stepTwoReducer from "../features/vehicle/stepTwoSlice";
import stepThreeReducer from "../features/vehicle/stepThreeSlice";
import stepFourReducer from "../features/vehicle/stepFourSlice";
import stepSixReducer from "../features/vehicle/stepSixSlice";

export const store = configureStore({
  reducer: {
    stepOne: stepOneReducer,
    stepTwo: stepTwoReducer,
    stepThree: stepThreeReducer,
    stepFour: stepFourReducer,
    stepSix: stepSixReducer,
  },
});
