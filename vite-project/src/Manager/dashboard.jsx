import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import { Users, ClipboardList, CheckCircle, Loader, TrendingUp } from "lucide-react";

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
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? 'md:ml-16 lg:ml-20' : 'md:ml-2'
        }`}
      >

        {/* Navbar */}
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleDesktopSidebar={toggleDesktopSidebar}
          isDesktopSidebarCollapsed={sidebarCollapsed}
        />

        {/* Dashboard Content */}
        <div className="p-4 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Manager Dashboard</h1>

          {/* ====== Stats Cards ====== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <ClipboardList className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-600">Total Leads</p>
                <h2 className="text-2xl font-bold">245</h2>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="text-green-600" />
              </div>
              <div>
                <p className="text-gray-600">Converted</p>
                <h2 className="text-2xl font-bold">82</h2>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Loader className="text-yellow-600" />
              </div>
              <div>
                <p className="text-gray-600">Pending</p>
                <h2 className="text-2xl font-bold">130</h2>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="text-purple-600" />
              </div>
              <div>
                <p className="text-gray-600">Team Members</p>
                <h2 className="text-2xl font-bold">12</h2>
              </div>
            </div>

          </div>

          {/* ====== Performance + Follow-ups ====== */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

            {/* Team Performance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Team Performance</h2>

              <ul className="space-y-4">
                {[
                  ["Arun Kumar", "80%", "text-green-600"],
                  ["Priya Sharma", "65%", "text-yellow-600"],
                  ["Rahul Singh", "45%", "text-red-600"],
                ].map(([name, score, color], i) => (
                  <li key={i} className="p-4 flex justify-between items-center bg-gray-50 rounded-lg">
                    <span className="font-medium">{name}</span>
                    <span className={`font-bold ${color}`}>{score}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow-ups */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Today's Follow-ups</h2>

              <ul className="space-y-4">
                {[
                  ["Ravi Kumar", "Call at 2 PM"],
                  ["Sneha Patel", "Meeting at 4 PM"],
                  ["Company XYZ", "Document verification"],
                ].map(([lead, task], i) => (
                  <li key={i} className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium">{lead}</p>
                    <p className="text-gray-600 text-sm">{task}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
