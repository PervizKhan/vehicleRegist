import { useDispatch, useSelector } from "react-redux";
import { setAdditionalNotes } from "../../features/vehicle/stepSixSlice";

const StepSix = () => {
  const dispatch = useDispatch();
  const additionalNotes = useSelector((state) => state.stepSix.additionalNotes);

  const handleChange = (event) => {
    dispatch(setAdditionalNotes(event.target.value));
  };

  return (
    <div className='flex flex-col bg-white px-6 py-6 rounded-lg'>
      <p className='text-lg font-bold mb-4'>Any Additional Notes</p>
      <div className='flex-1 bg-[#F9F9F9]'>
        <textarea
          value={additionalNotes}
          onChange={handleChange}
          placeholder='Enter your notes here...'
          className='w-full h-[200px] resize-none p-2 border rounded bg-[#F9F9F9]'
        />
      </div>
    </div>
  );
};

export default StepSix;
