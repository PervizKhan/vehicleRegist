import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFeatures: [],
};

const vehicleStepTwoSlice = createSlice({
  name: "stepTwo",
  initialState,
  reducers: {
    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.selectedFeatures.includes(feature)) {
        state.selectedFeatures = state.selectedFeatures.filter(
          (item) => item !== feature
        );
      } else {
        state.selectedFeatures.push(feature);
      }
    },
    resetFeatures: (state) => {
      state.selectedFeatures = [];
    },
  },
});

export const { toggleFeature, resetFeatures } = vehicleStepTwoSlice.actions;
export default vehicleStepTwoSlice.reducer;
