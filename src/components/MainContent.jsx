import Navbar from "./Navbar";
import Stepper from "./Stepper/Stepper";
import { vehicleRegistrationSteps } from "./multiStepForm/index";
import { useSelector } from "react-redux";

const MainContent = () => {
  const stepOneData = useSelector((state) => state.vehicle.stepOne);
  console.log("stepOne data ", stepOneData);
  return (
    <div className='flex flex-col border-l'>
      <Navbar />
      <div className='px-12 py-6 bg-[#F9F9F9]'>
        <Stepper stepsConfig={vehicleRegistrationSteps} />
      </div>
    </div>
  );
};

export default MainContent;
