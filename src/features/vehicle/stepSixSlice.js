import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  additionalNotes: "", // Field to store the notes input
};

const stepSixSlice = createSlice({
  name: "stepSix",
  initialState,
  reducers: {
    // Action to update additional notes
    setAdditionalNotes: (state, action) => {
      state.additionalNotes = action.payload;
    },
  },
});

export const { setAdditionalNotes } = stepSixSlice.actions;
export default stepSixSlice.reducer;
