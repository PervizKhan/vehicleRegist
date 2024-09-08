import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../redux/slices/multiStepFormSlice"; // Adjust path as needed

export const useStepHandlers = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.vehicle.currentStep);

  const handleNext = () => {
    if (currentStep < 6) {
      dispatch(setStep(currentStep + 1));
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      dispatch(setStep(currentStep - 1));
    }
  };

  return { handleNext, handleBack };
};
