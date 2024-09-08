// src/validationSchemas/stepThreeValidation.js
import * as Yup from "yup";

export const stepThreeValidationSchema = Yup.object().shape({
  RentalPricePerHour: Yup.number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Rental Price Per Hour is required"),
  RentalPricePerDay: Yup.number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Rental Price Per Day is required"),
  RentalPricePerWeek: Yup.number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Rental Price Per Week is required"),
  RentalPricePerMonth: Yup.number()
    .typeError("Must be a number")
    .positive("Must be greater than zero")
    .required("Rental Price Per Month is required"),
});
