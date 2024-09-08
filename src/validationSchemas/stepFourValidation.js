// validationSchemas/stepFourValidationSchema.js
import * as Yup from "yup";

export const stepFourValidationSchema = Yup.object().shape({
  policyNo: Yup.string().required("Insurance Policy Number is required"),
  providerName: Yup.string().required("Insurance Provider Name is required"),
  expiryDate: Yup.date()
    .required("Insurance Expiry Date is required")
    .nullable(),
});
