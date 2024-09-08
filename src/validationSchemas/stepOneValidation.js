import * as Yup from "yup";

export const stepOneValidationSchema = Yup.object().shape({
  vehicleID: Yup.string().nullable(), // Not required, so it can be null or an empty string

  make: Yup.string().required("Make is required"), // Required field

  model: Yup.string().required("Model is required"), // Required field

  type: Yup.string().required("Type is required"), // Required field

  year: Yup.string().required("Year is required"), // Required field

  registrationNo: Yup.string().required("Registration No is required"), // Required field

  color: Yup.string().required("Color is required"), // Required field

  fuelType: Yup.string().required("Fuel Type is required"), // Required field

  transmission: Yup.string().required("Transmission is required"), // Required field

  odometer: Yup.string()
    .required("Odometer is required")
    .matches(/^\d+$/, "Odometer must be a number"), // Ensures only numbers

  passengers: Yup.number()
    .required("Passengers is required")
    .oneOf([4, 5, 6], "Valid options for passengers are 4, 5, or 6"), // Ensure valid options

  country: Yup.string().required("Country is required"), // Required field

  city: Yup.string().required("City is required"), // Required field
});
