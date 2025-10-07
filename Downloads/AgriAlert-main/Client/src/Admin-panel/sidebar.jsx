import { FaTachometerAlt, FaUsersCog, FaEnvelope, FaUserPlus, FaSms, FaChartBar, FaUserCheck, FaCog, FaSignOutAlt } from 'react-icons/fa';
const Sidebar = () => {
  return (
    <aside className="w-64 bg-green-800 text-white p-6 transition-transform duration-300">
      <h2 className="text-xl font-bold mb-6">AgriAlert Admin</h2>
     <nav className="space-y-6">
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaTachometerAlt /> Dashboard
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaUsersCog /> Access Management
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaEnvelope /> Messaging
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaUserPlus /> Farmers Registration
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaSms /> SMS Alerts
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaChartBar /> Analytics
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaUserCheck /> Farmers Registered
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaCog /> Settings
  </button>
  <button className="flex items-center gap-3 w-full text-left cursor-pointer hover:underline">
    <FaSignOutAlt /> Logout
  </button>
</nav>
    </aside>
  );
};

export default Sidebar;