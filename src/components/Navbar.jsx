const Navbar = () => {
  return (
    <nav className='flex items-center justify-between p-[22.5px] border-b border-l'>
      {/* Left Icon */}
      <div className='flex-shrink-0'>
        <img
          src='./hamburger.svg'
          alt='Left Icon'
          className='w-6 h-6 cursor-pointer'
        />
      </div>

      {/* Right Icons */}
      <div className='flex space-x-4'>
        <img
          src='./notifications.svg'
          alt='Right Icon 1'
          className='w-6 h-6 cursor-pointer'
        />
        <img
          src='./profile.svg'
          alt='Right Icon 2'
          className='w-6 h-6 cursor-pointer'
        />
      </div>
    </nav>
  );
};

export default Navbar;
