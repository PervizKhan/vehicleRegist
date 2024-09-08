import MenuItem from "./MenuItem";
const Sidebar = () => {
  const menuItems = [
    { iconSrc: "./dashboard.svg", label: "Dashboard" },
    { iconSrc: "./calendar.svg", label: "Calendar" },
    { iconSrc: "./customers.svg", label: "Customers" },
    { iconSrc: "./reservations.svg", label: "Reservations" },
    { iconSrc: "./vehicle.svg", label: "Vehicles" },
    { iconSrc: "./tracking.svg", label: "Tracking" },
    { iconSrc: "./generator.svg", label: "Offer Generator" },
  ];
  return (
    <div className='flex flex-col h-screen'>
      {/* sidebar header */}
      <div className='flex items-center justify-center py-4'>
        <img src='./logo.svg' alt='' className='cursor-pointer' />
      </div>
      <div className='w-full h-px bg-gray-300'></div>

      {/* sidebar body */}
      <div className='flex flex-col pl-4 md:pl-6 lg:pl-12 pt-12 space-y-4'>
        {/* use MenuItem here using map */}
        {menuItems.map((item, index) => (
          <MenuItem key={index} iconSrc={item.iconSrc} label={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
