import PropTypes from "prop-types";

const MenuItem = ({ iconSrc, label }) => {
  return (
    <div className='flex space-x-4 items-center cursor-pointer'>
      <img src={iconSrc} alt={label} />
      <p className='text'>{label}</p>
    </div>
  );
};

MenuItem.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default MenuItem;
