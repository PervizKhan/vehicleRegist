import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  policyNo: "",
  providerName: "",
  expiryDate: "",
  errors: {
    policyNo: "",
    providerName: "",
    expiryDate: "",
  },
};

const stepFourSlice = createSlice({
  name: "stepFour",
  initialState,
  reducers: {
    updateInput(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setErrors(state, action) {
      state.errors = { ...state.errors, ...action.payload }; // Merge errors
    },
  },
});

export const { updateInput, setErrors } = stepFourSlice.actions;
export default stepFourSlice.reducer;
