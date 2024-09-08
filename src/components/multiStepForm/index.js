import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";

export const vehicleRegistrationSteps = [
  {
    name: "Vehicle Information",
    Component: StepOne,
  },
  {
    name: "Features",
    Component: StepTwo,
  },
  {
    name: "Rental Information",
    Component: StepThree,
  },
  {
    name: "Insurance Info",
    Component: StepFour,
  },
  {
    name: "Damages",
    Component: StepFive,
  },
  {
    name: "Others",
    Component: StepSix,
  },
];
