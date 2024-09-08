import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { toggleFeature } from "../../redux/slices/multiStepFormSlice";
import { useStepHandlers } from "../../utils/stepHandlers";
// import axios from "axios";
const StepTwo = () => {
  const { handleNext, handleBack } = useStepHandlers();
  const dispatch = useDispatch();
  // const selectedFeatures = useSelector(
  //   (state) => state.vehicle.stepTwo.selectedFeatures
  // );
  const currentStep = useSelector((state) => state.vehicle.currentStep);

  const features = ["GPS", "Air Conditioning", "Bluetooth", "Child Seat"];

  // Setup Formik
  const formik = useFormik({
    initialValues: { selectedFeatures: [] }, // Initialize selectedFeatures as an empty array or any default state

    onSubmit: async (values) => {
      try {
        // Dispatch the action with the selected features
        dispatch(toggleFeature(values.selectedFeatures));

        // Make API request (axios post request)
        // const response = await axios.post("/api/submit-features", {
        //   features: values.selectedFeatures,
        // });

        // if (response.status === 200) {
        //   handleNext();
        // } else {
        //   console.error("Error with response", response);
        // }

        //  I dont have a backend so calling handleNext in this case
        console.log(
          "stepTwo data to be sent to backend: ",
          values.selectedFeatures
        );
        handleNext();
      } catch (error) {
        console.error("Error during submission:", error);
      }
    },
  });

  const handleToggle = (feature) => {
    const newSelectedFeatures = formik.values.selectedFeatures.includes(feature)
      ? formik.values.selectedFeatures.filter((f) => f !== feature)
      : [...formik.values.selectedFeatures, feature];

    formik.setFieldValue("selectedFeatures", newSelectedFeatures);
  };

  return (
    <div className='flex flex-col bg-white px-10 py-12 rounded-lg shadow-md'>
      <form onSubmit={formik.handleSubmit} className='flex flex-col space-y-6'>
        <div className='grid grid-cols-4 gap-8'>
          {features.map((feature) => (
            <button
              key={feature}
              type='button'
              className={`px-4 py-2 rounded-lg border-2 ${
                formik.values.selectedFeatures.includes(feature)
                  ? "bg-[#242E69] text-white"
                  : "bg-[#F9F9F9] text-black"
              }`}
              onClick={() => handleToggle(feature)}
            >
              {feature}
            </button>
          ))}
        </div>

        <div className='flex items-center justify-between mt-8'>
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
            type='submit'
            onClick={formik.handleSubmit}
            className='font-medium text-lg text-white bg-[#242E69] rounded-lg px-6 py-1 border-2'
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepTwo;
