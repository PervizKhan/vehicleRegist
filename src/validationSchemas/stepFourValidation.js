import * as Yup from "yup";

const today = new Date();

export const stepFourValidationSchema = Yup.object().shape({
  policyNo: Yup.string().required("Insurance Policy Number is required"),
  providerName: Yup.string().required("Insurance Provider Name is required"),
  expiryDate: Yup.date()
    .required("Insurance Expiry Date is required")
    .nullable()
    .min(today, "Expiry date cannot be in the past"), // Ensure the date is not older than today
});
