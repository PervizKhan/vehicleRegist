const StepFive = () => {
  return (
    <div className='grid grid-cols-2 bg-white px-6 py-10'>
      <div className='flex flex-col space-y-10'>
        <div className='flex items-center justify-center space-x-4'>
          <span className='inline-flex space-x-2 bg-[#F9F9F9] rounded-lg px-8 py-3'>
            <div className='flex items-center justify-center w-5 h-5 rounded-full bg-white border border-black'>
              <div className='w-3 h-3 rounded-full bg-black'></div>
            </div>
            <p className='font-semibold'>Exterior</p>
          </span>
          <span className='inline-flex space-x-2 bg-[#F9F9F9] rounded-lg px-8 py-3'>
            <div className='flex items-center justify-center w-5 h-5 rounded-full bg-white border border-black'>
              <div className='w-3 h-3 rounded-full bg-black'></div>
            </div>
            <p className='font-semibold'>Interior</p>
          </span>
        </div>
        <div className='flex items-center justify-center'>
          <img src='./cars-damage.svg' alt='' />
        </div>
      </div>
  {/*  */}
      <div className='flex flex-col h-full border-l-2 '>
        {/* Header row with items evenly spaced */}
        <div className='flex items-center justify-around font-semibold'>
          <p>No</p>
          <p>Damage Type</p>
          <p>Degree</p>
        </div>

        {/* Content area that should take up the remaining height */}
        <div className='flex-1 flex items-center justify-center p-4'>
          <p>Tape on the Vehicle part to add damage</p>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
