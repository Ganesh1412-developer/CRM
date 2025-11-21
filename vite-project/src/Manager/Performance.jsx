import { useState } from "react";
import { X, TrendingUp, Phone, Users, Target, Award } from "lucide-react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function EmployeePerformance() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  // Sample Performance Data
  const performanceData = [
    {
      id: 1,
      employee: "John Doe",
      date: "2025-11-18",
      calls: 35,
      followUps: 12,
      leadsHandled: 20,
      conversions: 5,
    },
    {
      id: 2,
      employee: "Priya Singh",
      date: "2025-11-18",
      calls: 28,
      followUps: 10,
      leadsHandled: 15,
      conversions: 3,
    },
    {
      id: 1,
      employee: "John Doe",
      date: "2025-11-17",
      calls: 40,
      followUps: 18,
      leadsHandled: 25,
      conversions: 7,
    },
  ];

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const employees = [...new Set(performanceData.map((d) => d.employee))];

  const filteredData = performanceData.filter((item) => {
    return (
      (selectedEmployee ? item.employee === selectedEmployee : true) &&
      (dateFilter ? item.date === dateFilter : true)
    );
  });

  // Calculate totals for summary cards
  const totals = filteredData.reduce(
    (acc, item) => ({
      calls: acc.calls + item.calls,
      followUps: acc.followUps + item.followUps,
      leadsHandled: acc.leadsHandled + item.leadsHandled,
      conversions: acc.conversions + item.conversions,
    }),
    { calls: 0, followUps: 0, leadsHandled: 0, conversions: 0 }
  );

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

        {/* Employee Performance Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Employee Performance</h1>

          {/* Filters */}
          <div className="bg-white p-5 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-600 mb-2">Employee</label>
                <select
                  className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={selectedEmployee}
                  onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                  <option value="">All Employees</option>
                  {employees.map((emp) => (
                    <option key={emp} value={emp}>
                      {emp}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-600 mb-2">Date</label>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-5 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Total Calls</p>
                  <p className="text-3xl font-bold mt-1">{totals.calls}</p>
                </div>
                <div className="bg-blue-400 bg-opacity-30 p-3 rounded-full">
                  <Phone size={24} />
                </div>
              </div>
            </div> */}

            {/* <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-5 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Follow-ups</p>
                  <p className="text-3xl font-bold mt-1">{totals.followUps}</p>
                </div>
                <div className="bg-purple-400 bg-opacity-30 p-3 rounded-full">
                  <TrendingUp size={24} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-5 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Leads Handled</p>
                  <p className="text-3xl font-bold mt-1">{totals.leadsHandled}</p>
                </div>
                <div className="bg-green-400 bg-opacity-30 p-3 rounded-full">
                  <Users size={24} />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-5 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Conversions</p>
                  <p className="text-3xl font-bold mt-1">{totals.conversions}</p>
                </div>
                <div className="bg-orange-400 bg-opacity-30 p-3 rounded-full">
                  <Award size={24} />
                </div>
              </div>
            </div> */}
          </div>

          {/* Performance Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Performance Details</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Calls</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Follow-ups</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Leads Handled</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Conversions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {filteredData.map((d, i) => (
                    <tr key={i} className="hover:bg-purple-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{d.employee}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">{d.date}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {d.calls}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                          {d.followUps}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {d.leadsHandled}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                          {d.conversions}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredData.length === 0 && (
                <div className="text-center py-12">
                  <Target size={48} className="mx-auto text-gray-300 mb-3" />
                  <p className="text-gray-500 text-lg font-medium">No data found</p>
                  <p className="text-gray-400 text-sm mt-1">Try adjusting your filters</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}