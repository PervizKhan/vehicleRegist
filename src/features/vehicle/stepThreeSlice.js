// src/features/vehicle/stepThreeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input1: "",
  input2: "",
  input3: "",
  input4: "",
  errors: {},
};

const vehicleStepThreeSlice = createSlice({
  name: "stepThree",
  initialState,
  reducers: {
    updateInput: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetStepThree: () => initialState,
  },
});

export const { updateInput, setErrors, resetStepThree } =
  vehicleStepThreeSlice.actions;
export default vehicleStepThreeSlice.reducer;
