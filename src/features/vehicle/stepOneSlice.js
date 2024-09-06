import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
  vehicleID: "",
  make: "",
  model: "",
  year: "",
  transmission: "",
  city: "",
  type: "",
  registrationNo: "",
  color: "",
  fuelType: "",
  odometer: "",
  passengers: "",
  country: "",
  images: [], // Add images array here
};

const vehicleStepOneSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    resetForm: () => initialState,

    // Action to add images
    addImageMetadata: (state, action) => {
      state.images.push(...action.payload);
    },
    // Action to remove an image by name
    removeImageMetadata: (state, action) => {
      state.images = state.images.filter(
        (image) => image.name !== action.payload
      );
    },
  },
});

export const {
  updateField,
  resetForm,
  setStep,
  addImageMetadata,
  removeImageMetadata,
} = vehicleStepOneSlice.actions;
export default vehicleStepOneSlice.reducer;
