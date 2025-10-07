import { useState } from 'react';
import Sidebar from '../Admin-panel/sidebar';
import Header from '../Admin-panel/Header';
import DashboardCard from '../Admin-panel/Dashboardcard';
import Sms from "../Admin-panel/sms";
import Access from '../Admin-panel/Access';


const AdminDashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  // const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleLogout = () =>{

  }
  
  // const toggleSidebar = () =>{
  //   setShowSidebar(!showSidebar);
  // }
  
    return (
    <div className="flex min-h-screen bg-gray-100">
      {showSidebar && <Sidebar />}
      <div className="flex-1">
        <Header onLogout={handleLogout} showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>

        <section className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <DashboardCard title="Farmers" value="1,245" />
          <DashboardCard title="Alerts Sent" value="320" />
          <DashboardCard title="Regions Active" value="12" />
          <DashboardCard title="Languages" value="5" />
        </section>
        <Access/>
        <Sms/>
      </div>
    </div>
  );
};

export default AdminDashboard;