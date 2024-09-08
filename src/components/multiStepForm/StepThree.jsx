import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updateField } from "../../redux/slices/multiStepFormSlice";
import { stepThreeValidationSchema as validationSchema } from "../../validationSchemas/stepThreeValidation";
import { useStepHandlers } from "../../utils/stepHandlers";

const StepThree = () => {
  const dispatch = useDispatch();
  const { handleNext, handleBack } = useStepHandlers();
  const formData = useSelector((state) => state.vehicle.stepThree);

  const inputs = [
    { name: "RentalPricePerHour", label: "Rental Price Per Hour" },
    { name: "RentalPricePerDay", label: "Rental Price Per Day" },
    { name: "RentalPricePerWeek", label: "Rental Price Per Week" },
    { name: "RentalPricePerMonth", label: "Rental Price Per Month" },
  ];

  const formik = useFormik({
    initialValues: {
      RentalPricePerHour: formData.RentalPricePerHour || "",
      RentalPricePerDay: formData.RentalPricePerDay || "",
      RentalPricePerWeek: formData.RentalPricePerWeek || "",
      RentalPricePerMonth: formData.RentalPricePerMonth || "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Dispatch the field update along with step information
      Object.keys(values).forEach((key) => {
        dispatch(
          updateField({ step: "stepThree", field: key, value: values[key] })
        );
      });
      handleNext();
    },
  });

  return (
    <div className='flex flex-col bg-white px-10 py-12 rounded-lg shadow-md'>
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-4 gap-8'>
        {inputs.map(({ name, label }) => (
          <div key={name} className='flex flex-col'>
            <label className='font-semibold'>{label}</label>
            <input
              type='text'
              name={name}
              value={formik.values[name] || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-2 border rounded-lg bg-[#F9F9F9]'
            />
            {formik.errors[name] && formik.touched[name] && (
              <div className='text-red-500 text-sm'>{formik.errors[name]}</div>
            )}
          </div>
        ))}
        <div className='flex items-center justify-between col-span-4 mt-8'>
          <button
            type='button'
            onClick={handleBack}
            className='font-semibold text-lg text-[#242E69] rounded-lg px-12 py-1 border-2'
          >
            Back
          </button>
          <button
            type='submit'
            className='font-medium text-lg text-white bg-[#242E69] rounded-lg px-6 py-1 border-2'
          >
            Save and Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default StepThree;
