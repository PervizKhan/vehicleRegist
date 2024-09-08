/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutStepper = ({ stepsConfig = [] }) => {
  const currentStep = useSelector((state) => state.vehicle.currentStep);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    if (stepRef.current.length) {
      setMargins({
        marginLeft: stepRef.current[0]?.offsetWidth / 2 || 0,
        marginRight:
          stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2 || 0,
      });
    }
  }, [stepsConfig.length]);

  if (!stepsConfig.length) {
    return <></>;
  }

  const calculateProgressBarWidth = () => {
    if (stepsConfig.length > 1) {
      return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
    }
    return 0;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  return (
    <div className=''>
      <div className='relative flex justify-between mb-5'>
        {stepsConfig.map((step, index) => (
          <div
            key={step.name}
            ref={(el) => (stepRef.current[index] = el)}
            className={`flex flex-col items-center z-20 ${
              currentStep > index + 1 ? "text-[#242E69]" : ""
            } ${currentStep === index + 1 ? "text-black" : ""}`}
          >
            <div
              className={`w-2 h-2 md:w-4 md:h-4 lg:w-10 lg:h-10 rounded-full border flex justify-center items-center mb-2 ${
                currentStep > index
                  ? "bg-[#242E69] text-white font-light text-sm"
                  : "bg-white font-semibold"
              }`}
            >
              {index + 1}
            </div>
            <div className='text-sm'>{step.name}</div>
          </div>
        ))}

        {/* Progress bar */}
        <div
          className='absolute top-[26%] left-5 right-0 h-2 border  bg-[#ffffff] z-0'
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: `${margins.marginLeft}px`,
            marginRight: `${margins.marginRight}px`,
          }}
        >
          <div
            className='h-full bg-[#242E69] transition-all duration-200'
            style={{ width: `${calculateProgressBarWidth()}%` }}
          ></div>
        </div>
      </div>

      <ActiveComponent />
    </div>
  );
};

export default CheckoutStepper;
