import { FaBars, FaUserShield, FaLeaf, FaSignOutAlt } from "react-icons/fa";

const Header = ({ onLogout ,showSidebar, setShowSidebar }) => {
  return (
    <header className="bg-green-700 text-white p-4 flex items-center justify-between">
      <button onClick={() => setShowSidebar(!showSidebar)}>
        <FaBars className="text-2xl cursor-pointer" />
        </button>
      <div className="flex items-center gap-2">
        <FaUserShield className="text-xl" />
        <h1 className="text-xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <FaLeaf className="text-xl" />
        <h2 className="text-2xl font-bold">AgriAlert</h2>
      </div>

      <button
        onClick={onLogout}
        className="flex items-center gap-2 bg-white text-green-700 px-3 py-1 rounded hover:bg-amber-500 hover:text-white transition-colors duration-300"
      >
        <FaSignOutAlt />
        Logout
      </button>
    </header>
  );
};

export default Header;