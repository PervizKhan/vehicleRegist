import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "../../features/vehicle/stepFourSlice";

const StepFour = () => {
  const dispatch = useDispatch();
  const { policyNo, providerName, expiryDate, errors } = useSelector(
    (state) => state.stepFour
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ name, value }));
  };

  return (
    <div className='flex flex-col bg-white px-10 py-12 rounded-lg shadow-md'>
      <div className='grid grid-cols-3 gap-8'>
        <div className='flex flex-col'>
          <label className='font-semibold'>Insurance Policy Number</label>
          <input
            type='text'
            name='policyNo'
            value={policyNo}
            onChange={handleChange}
            className='p-2 border rounded-lg bg-[#F9F9F9]'
          />
          {errors.policyNo && <p className='text-red-500'>{errors.policyNo}</p>}
        </div>
        <div className='flex flex-col'>
          <label className='font-semibold'>Insurance Provider Name</label>
          <input
            type='text'
            name='providerName'
            value={providerName}
            onChange={handleChange}
            className='p-2 border rounded-lg bg-[#F9F9F9]'
          />
          {errors.providerName && (
            <p className='text-red-500'>{errors.providerName}</p>
          )}
        </div>
        <div className='flex flex-col'>
          <label className='font-semibold'>Insurance Expiry Date</label>
          <input
            type='date'
            name='expiryDate'
            value={expiryDate}
            onChange={handleChange}
            className='p-2 border rounded-lg bg-[#F9F9F9]'
          />
          {errors.expiryDate && (
            <p className='text-red-500'>{errors.expiryDate}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepFour;
