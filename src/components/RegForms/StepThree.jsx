/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { updateInput } from "../../features/vehicle/stepThreeSlice";

const StepThree = () => {
  const dispatch = useDispatch();
  const { input1, input2, input3, input4, errors } = useSelector(
    (state) => state.stepThree
  );

  const inputs = [
    { name: "input1", label: "Rental Price Per Hour" },
    { name: "input2", label: "Rental Price Per Day" },
    { name: "input3", label: "Rental Price Per Week" },
    { name: "input4", label: "Rental Price Per Month" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateInput({ name, value }));
  };

  return (
    <div className='flex flex-col bg-white px-10 py-12 rounded-lg shadow-md'>
      <div className='grid grid-cols-4 gap-8'>
        {inputs.map(({  name, label }) => (
          <div key={name} className='flex flex-col'>
            <label className='font-semibold'>{label}</label>
            <input
              type='text'
              name={name}
              value={eval(name)} // Use eval to dynamically access the variable by name
              onChange={handleChange}
              className='p-2 border rounded-lg bg-[#F9F9F9]'
            />
            {errors[name] && <p className='text-red-500'>{errors[name]}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepThree;
