import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateField } from "../../redux/slices/multiStepFormSlice";
import { useStepHandlers } from "../../utils/stepHandlers";
const StepSix = () => {
  const { handleBack } = useStepHandlers(); // Import navigation handlers
  const dispatch = useDispatch();
  const additionalNotes = useSelector(
    (state) => state.vehicle.stepSix.additionalNotes
  );
  const allFormsData = useSelector((state) => state);

  const formik = useFormik({
    initialValues: { additionalNotes: additionalNotes || "" },

    onSubmit: (values) => {
      dispatch(
        updateField({
          step: "stepSix",
          field: "additionalNotes",
          value: values.additionalNotes,
        })
      );
      console.log(
        "All Forms Data in a Single Object to send to backend",
        allFormsData
      );
    },
  });

  return (
    <div className='flex flex-col bg-white px-6 py-6 rounded-lg'>
      <p className='text-lg font-bold mb-4'>Any Additional Notes</p>
      <form onSubmit={formik.handleSubmit} className='flex-1 bg-[#F9F9F9]'>
        <textarea
          name='additionalNotes'
          value={formik.values.additionalNotes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder='Enter your notes here...'
          className='w-full h-[200px] resize-none p-2 border rounded bg-[#F9F9F9]'
        />
        {formik.touched.additionalNotes && formik.errors.additionalNotes ? (
          <div className='text-red-500 text-sm'>
            {formik.errors.additionalNotes}
          </div>
        ) : null}
        <div className='flex items-center justify-between mt-8'>
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

export default StepSix;
