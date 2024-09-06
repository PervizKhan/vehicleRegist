import { useDispatch, useSelector } from "react-redux";
import { updateField } from "../../features/vehicle/stepOneSlice";
import PropTypes from "prop-types";
import { fieldsConfig } from "../../config/fieldsConfig";
import ImageUpload from "../ImageUpload";

const StepOne = ({ errors }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.stepOne);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  return (
    <div className='flex flex-col space-y-8'>
      <div className='p-4 bg-white shadow-md rounded-lg space-y-6'>
        <div className='grid grid-cols-4 gap-4'>
          {fieldsConfig.map((field) => (
            <div key={field.name}>
              <label className='block font-normal'>
                {field.label}
                {field.required && "*"}
              </label>
              {field.type === "select" ? (
                <select
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
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
                  value={formData[field.name]}
                  onChange={handleChange}
                  className='w-full p-2 border rounded-lg bg-[#F9F9F9]'
                />
              )}
              {errors[field.name] && (
                <p className='text-red-500'>{errors[field.name]}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* upload section */}
      <ImageUpload />
    </div>
  );
};

StepOne.propTypes = {
  errors: PropTypes.object.isRequired, // Expecting errors to be an object
};

export default StepOne;
