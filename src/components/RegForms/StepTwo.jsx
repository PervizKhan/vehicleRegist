import { useSelector, useDispatch } from "react-redux";
import { toggleFeature } from "../../features/vehicle/stepTwoSlice";

const StepTwo = () => {
  const dispatch = useDispatch();

  // Get the selected features from the Redux store
  const selectedFeatures = useSelector(
    (state) => state.stepTwo.selectedFeatures
  );

  const features = ["GPS", "Air Conditioning", "Bluetooth", "Child Seat"];

  // Toggle selection of a feature by dispatching an action
  const handleToggle = (feature) => {
    dispatch(toggleFeature(feature));
  };

  return (
    <div className='flex flex-col bg-white px-10 py-12 rounded-lg shadow-md'>
      {/* Checkboxes that look like buttons */}
      <div className='grid grid-cols-4 gap-8'>
        {features.map((feature) => (
          <button
            key={feature}
            className={`px-4 py-2 rounded-lg border-2 ${
              selectedFeatures.includes(feature)
                ? "bg-[#242E69] text-white"
                : "bg-[#F9F9F9] text-black"
            }`}
            onClick={() => handleToggle(feature)}
          >
            {feature}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
