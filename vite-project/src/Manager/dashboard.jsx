import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const ManagerDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onClose={() => setMobileSidebarOpen(false)}
        mobile={mobileSidebarOpen}
      />

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16 lg:ml-20' : 'md:ml-2'}`}>
        {/* Navbar */}
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleDesktopSidebar={toggleDesktopSidebar}
          isDesktopSidebarCollapsed={sidebarCollapsed}
        />

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Manager Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Team Overview</h2>
              <p className="text-gray-600">Monitor team performance and activities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Project Management</h2>
              <p className="text-gray-600">Track projects and assign tasks.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Reports</h2>
              <p className="text-gray-600">Generate team and project reports.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
