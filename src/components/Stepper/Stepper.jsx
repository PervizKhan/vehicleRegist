// import { useSelector } from "react-redux";
// import "./stepper.css";

// const Stepper = () => {
//   const currentStep = useSelector((state)=> state.vehicle.step)
//   const steps = [
//     "Vehicle Information",
//     "Features",
//     "Rental Information",
//     "Insurance Info",
//     "Damages",
//     "Others",
//   ];

//   return (
//     <>
//       <div className='flex justify-between'>
//         {steps?.map((step, i) => (
//           <div
//             key={i}
//             className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
//               i + 1 < currentStep || complete ? "complete" : ""
//             }`}
//             aria-current={currentStep === i + 1 ? "step" : undefined}
//           >
//             <div className='step'>{i + 1}</div>
//             <p>{step}</p>
//           </div>
//         ))}
//       </div>

//     </>
//   );
// };

// export default Stepper;

import { useSelector } from "react-redux";
import "./stepper.css";

const Stepper = () => {
  const currentStep = useSelector((state) => state.stepOne.step);
  const steps = [
    "Vehicle Information",
    "Features",
    "Rental Information",
    "Insurance Info",
    "Damages",
    "Others",
  ];

  return (
    <>
      <div className='flex justify-between'>
        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 ? "active" : ""} ${
              i + 1 < currentStep ? "complete" : ""
            }`}
            aria-current={currentStep === i + 1 ? "step" : undefined}
          >
            <div className='step'>{i + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;
