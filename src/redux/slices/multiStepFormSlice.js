import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  stepOne: {
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
    images: [],
  },
  stepTwo: {
    selectedFeatures: [],
  },
  stepThree: {
    RentalPricePerHour: "12",
    RentalPricePerDay: "111",
    RentalPricePerWeek: "",
    RentalPricePerMonth: "",
  },
  stepFour: {
    policyNo: "",
    providerName: "",
    expiryDate: "",
  },
  stepSix: {
    additionalNotes: "",
  },
};

export const multiStepFormSlice = createSlice({
  name: "multiStepForm",
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.currentStep = action.payload;
    },
    updateField: (state, action) => {
      const { step, field, value } = action.payload;
      state[step][field] = value; // Correctly updating the field based on step
    },
    resetForm: () => {
      // Reset the state back to the initial state
      return initialState;
    },
    addImageMetadata: (state, action) => {
      state.stepOne.images.push(...action.payload);
    },
    removeImageMetadata: (state, action) => {
      state.stepOne.images = state.stepOne.images.filter(
        (image) => image.name !== action.payload
      );
    },

    // Toggle feature selection in stepTwo
    toggleFeature: (state, action) => {
      const feature = action.payload;
      if (state.stepTwo.selectedFeatures.includes(feature)) {
        // If feature is already selected, remove it
        state.stepTwo.selectedFeatures = state.stepTwo.selectedFeatures.filter(
          (item) => item !== feature
        );
      } else {
        // If feature is not selected, add it
        state.stepTwo.selectedFeatures.push(feature);
      }
    },
  },
});

export const {
  updateField,
  resetForm,
  setStep,
  addImageMetadata,
  removeImageMetadata,
  toggleFeature,
} = multiStepFormSlice.actions;

export default multiStepFormSlice.reducer;
