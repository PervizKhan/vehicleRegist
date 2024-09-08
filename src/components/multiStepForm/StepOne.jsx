import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateField } from "../../redux/slices/multiStepFormSlice";
import { fieldsConfig } from "../../config/fieldsConfig";
import ImageUpload from "../ImageUpload";
import { stepOneValidationSchema as validationSchema } from "../../validationSchemas/stepOneValidation";
import { useStepHandlers } from "../../utils/stepHandlers";

const StepOne = () => {
  const { handleNext, handleBack } = useStepHandlers();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.vehicle.stepOne);
  const currentStep = useSelector((state) => state.vehicle.currentStep);

  const formik = useFormik({
    initialValues: fieldsConfig.reduce((values, field) => {
      values[field.name] = formData[field.name] || "";
      return values;
    }, {}),
    validationSchema,
    onSubmit: (values) => {
      // Dispatch the field update along with step information
      Object.keys(values).forEach((key) => {
        dispatch(
          updateField({ step: "stepOne", field: key, value: values[key] })
        );
      });
      handleNext();
    },
  });

  return (
    <div className='flex flex-col space-y-8'>
      <form
        onSubmit={formik.handleSubmit}
        className='p-4 bg-white shadow-md rounded-lg space-y-6'
      >
        <div className='grid  md:grid-cols-2 lg: lg:grid-cols-4 gap-2 md:gap-4'>
          {fieldsConfig.map((field) => (
            <div key={field.name}>
              <label className='block font-normal'>
                {field.label}
                {field.required && "*"}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formik.values[field.name] || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full p-2 border rounded bg-[#F9F9F9]'
                >
                  <option value=''>Select</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formik.values[field.name] || ""}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className='w-full p-2 border rounded-lg bg-[#F9F9F9]'
                />
              )}
              {formik.errors[field.name] && formik.touched[field.name] && (
                <div className='text-red-500 text-sm'>
                  {formik.errors[field.name]}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* upload section */}
        <ImageUpload />

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
            className='font-normal md:font-medium text-sm md:text-lg text-white bg-[#242E69] rounded-lg px-4 md:px-6 py-1 border-2'
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepOne;
