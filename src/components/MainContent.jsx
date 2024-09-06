import { useState } from "react";
import Navbar from "./Navbar";
import Stepper from "./Stepper/Stepper";
import StepOne from "./RegForms/StepOne";
import StepTwo from "./RegForms/StepTwo";
import StepThree from "./RegForms/StepThree";
import StepFour from "./RegForms/StepFour";
import StepFive from "./RegForms/StepFive";
import StepSix from "./RegForms/StepSix";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../features/vehicle/stepOneSlice";
import * as Yup from "yup";
import { fieldsConfig } from "../config/fieldsConfig";
import { setErrors } from "../features/vehicle/stepThreeSlice";
import { setErrors as setStepFourErrors } from "../features/vehicle/stepFourSlice";

//import axios from "axios";

export const MainContent = () => {
  const dispatch = useDispatch();

  const allData = useSelector((state) => state);

  // stepOne
  const vehicleFormData = useSelector((state) => state.stepOne);
  const currentStep = vehicleFormData.step;
  const [stepOneErrors, setStepOneErrors] = useState({});

  // stepTwo
  const selectedFeatures = useSelector(
    (state) => state.stepTwo.selectedFeatures
  );
  // stepThree
  const stepThreeData = useSelector((state) => state.stepThree);

  const stepThreeValidator = (data) => {
    const newErrors = {};

    if (!data.input1 || isNaN(data.input1) || data.input1 <= 0)
      newErrors.input1 = "Input 1 is required and it must be a positive number";

    if (!data.input2 || isNaN(data.input2) || data.input2 <= 0)
      newErrors.input2 = "Input 2 is required and it must be a positive number";

    if (!data.input3 || isNaN(data.input3) || data.input3 <= 0)
      newErrors.input3 = "Input 3 is required and it must be a positive number";

    if (!data.input4 || isNaN(data.input4) || data.input4 <= 0)
      newErrors.input4 = "Input 4 is required and it must be a positive number";

    // Dispatch errors to the Redux store
    dispatch(setErrors(newErrors));

    return Object.keys(newErrors).length === 0;
  };

  // validation schema based on fields configuration for stepOne
  const stepOneValidationSchema = Yup.object().shape(
    fieldsConfig.reduce((acc, field) => {
      if (field.required) {
        acc[field.name] = Yup.string().required(`${field.label} is required`);
      }
      return acc;
    }, {})
  );

  // Function to validate form data for stepOne
  const validateFormData = (data) => {
    try {
      stepOneValidationSchema.validateSync(data, { abortEarly: false });
      return true;
    } catch (error) {
      // Store validation errors in state
      const validationErrors = error.inner.reduce((acc, curr) => {
        acc[curr.path] = curr.message;
        return acc;
      }, {});
      setStepOneErrors(validationErrors);
      return false;
    }
  };
  // stepFour
  const stepFourData = useSelector((state) => state.stepFour);

  const stepFourValidator = (stepFourData) => {
    const newErrors = {};
    // Validate policy number
    if (!stepFourData.policyNo || stepFourData.policyNo.trim() === "") {
      newErrors.policyNo = "Insurance Policy Number is required.";
    } else if (!/^[a-zA-Z0-9]{5,20}$/.test(stepFourData.policyNo)) {
      newErrors.policyNo =
        "Insurance Policy Number must be alphanumeric and between 5 to 20 characters.";
    }

    // Validate provider name
    if (!stepFourData.providerName || stepFourData.providerName.trim() === "") {
      newErrors.providerName = "Insurance Provider Name is required.";
    } else if (stepFourData.providerName.length < 2) {
      newErrors.providerName =
        "Insurance Provider Name must be at least 2 characters long.";
    }

    // Validate expiry date
    if (!stepFourData.expiryDate || stepFourData.expiryDate.trim() === "") {
      newErrors.expiryDate = "Insurance Expiry Date is required.";
    } else {
      const currentDate = new Date();
      const selectedDate = new Date(stepFourData.expiryDate);

      if (selectedDate <= currentDate) {
        newErrors.expiryDate = "Insurance Expiry Date must be a future date.";
      }
    }

    // Dispatch the error state to Redux
    dispatch(setStepFourErrors(newErrors));

    // Return true only if there are no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle the step change
  const handleNextStep = async () => {
    const formData = vehicleFormData;
    if (currentStep === 1) {
      if (validateFormData(formData)) {
        dispatch(setStep(currentStep + 1));
        setStepOneErrors({});
      }
    } else if (currentStep === 2) {
      // Handle selected features from Step Two
      if (selectedFeatures.length > 0) {
        try {
          // Send the selectedFeatures to the backend using axios
          // const response = await axios.post(
          //   "https://your-backend-api.com/vehicle/features",
          //   {
          //     features: selectedFeatures,
          //   }
          // );

          // console.log("Data saved:", response.data);

          // If successful, proceed to the next step
          dispatch(setStep(currentStep + 1));
        } catch (error) {
          console.error("Error while sending data to the backend:", error);
          alert("Failed to send data to the server. Please try again.");
        }
      } else {
        alert("Please select at least one feature.");
      }
    } else if (currentStep === 3) {
      const isValid = stepThreeValidator(stepThreeData);
      if (isValid) {
        dispatch(setStep(currentStep + 1));
      }
    } else if (currentStep === 4) {
      const isValid = stepFourValidator(stepFourData);
      if (isValid) {
        dispatch(setStep(currentStep + 1));
      }
    } else if (currentStep === 5) {
      dispatch(setStep(currentStep + 1));
    } else if (currentStep === 6) {
      // send data to the server
      // const response = axios.post('/endpoint',allData);
      console.log("All Data send to the backend", allData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      dispatch(setStep(currentStep - 1));
    }
  };

  return (
    <div className='flex flex-col h-screen border-l'>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <div className='flex-1 p-5'>
        {/* Your main content here */}
        <h1 className='font-bold text-lg'>Add New Vehicle</h1>
        <p className='font-normal text-sm text-[#808080]'>
          Vehicle / Add New Vehicle
        </p>

        <div className='bg-[#F9F9F9] px-6 py-6 rounded-lg mt-4 space-y-6'>
          <Stepper currentStep={currentStep} />
          <div className='bg-gray-200'>
            {currentStep === 1 && <StepOne errors={stepOneErrors} />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}
            {currentStep === 4 && <StepFour />}
            {currentStep === 5 && <StepFive />}
            {currentStep === 6 && <StepSix />}
          </div>
          <div className='flex items-center justify-between'>
            {currentStep > 1 ? (
              <button
                onClick={handleBack}
                className='font-semibold text-lg text-[#242E69] rounded-lg px-12 py-1 border-2'
              >
                Back
              </button>
            ) : (
              // Invisible placeholder to keep layout intact
              <div className='px-12 py-1'></div>
            )}
            <button
              onClick={handleNextStep}
              className='font-medium text-lg text-white bg-[#242E69] rounded-lg px-6 py-1 border-2'
            >
              Save and Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
