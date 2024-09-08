import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { updateField } from "../../redux/slices/multiStepFormSlice";
import { stepFourValidationSchema as validationSchema } from "../../validationSchemas/stepFourValidation";
import { useStepHandlers } from "../../utils/stepHandlers";

const StepFour = () => {
  const { handleNext, handleBack } = useStepHandlers();
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.vehicle.stepFour);

  const fields = [
    { name: "policyNo", label: "Insurance Policy Number", type: "text" },
    { name: "providerName", label: "Insurance Provider Name", type: "text" },
    { name: "expiryDate", label: "Insurance Expiry Date", type: "date" },
  ];

  const formik = useFormik({
    initialValues: {
      policyNo: formData.policyNo || "",
      providerName: formData.providerName || "",
      expiryDate: formData.expiryDate || "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Dispatch the field update along with step information
      Object.keys(values).forEach((key) => {
        dispatch(
          updateField({ step: "stepFour", field: key, value: values[key] })
        );
      });
      handleNext();
    },
  });

  return (
    <div className='flex flex-col bg-white px-10 py-12 rounded-lg shadow-md'>
      <form onSubmit={formik.handleSubmit} className='grid grid-cols-3 gap-8'>
        {fields.map(({ name, label, type }) => (
          <div key={name} className='flex flex-col'>
            <label className='font-semibold'>{label}</label>
            <input
              type={type}
              name={name}
              value={formik.values[name] || ""}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='p-2 border rounded-lg bg-[#F9F9F9]'
            />
            {formik.errors[name] && formik.touched[name] && (
              <p className='text-red-500'>{formik.errors[name]}</p>
            )}
          </div>
        ))}
        <div className='flex items-center justify-between col-span-3 mt-8'>
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

export default StepFour;
