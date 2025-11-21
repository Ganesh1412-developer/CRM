import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { FileDown, FileSpreadsheet, Calendar, Users } from "lucide-react";

export default function ManagerReports() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("daily");

  const toggleSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);
  const toggleDesktopSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const sampleReports = [
    { date: "2025-11-18", employee: "Ravi Kumar", leads: 12, conversions: 3 },
    { date: "2025-11-18", employee: "Priya Sharma", leads: 8, conversions: 1 },
  ];

  const exportPDF = () => {
    alert("PDF export working (You can add jsPDF here)");
  };

  const exportExcel = () => {
    alert("Excel export working (Use XLSX library later)");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={sidebarCollapsed}
        mobile={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-16 lg:ml-20" : "md:ml-2"
        }`}
      >
        {/* Navbar */}
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleDesktopSidebar={toggleDesktopSidebar}
          isDesktopSidebarCollapsed={sidebarCollapsed}
        />

        {/* Page Content */}
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Reports</h1>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab("daily")}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "daily"
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              Daily Reports
            </button>

            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "monthly"
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              Monthly Reports
            </button>

            <button
              onClick={() => setActiveTab("conversion")}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                activeTab === "conversion"
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-white text-gray-700 shadow hover:shadow-md"
              }`}
            >
              Conversion Reports
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white p-5 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Filters</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Date</label>
                <input
                  type="date"
                  className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="flex-1 min-w-[200px]">
                <label className="block text-sm font-medium text-gray-600 mb-2">Select Employee</label>
                <select className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="">All Employees</option>
                  <option value="Ravi Kumar">Ravi Kumar</option>
                  <option value="Priya Sharma">Priya Sharma</option>
                </select>
              </div>

              <button
                className="px-6 py-3 bg-purple-600 text-white rounded-lg self-end font-medium hover:bg-purple-700 transition-colors shadow-md"
              >
                Filter
              </button>
            </div>
          </div>

          {/* Report Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                {activeTab === "daily" && "Daily Reports"}
                {activeTab === "monthly" && "Monthly Reports"}
                {activeTab === "conversion" && "Conversion Reports"}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Leads</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Conversions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {sampleReports.map((r, i) => (
                    <tr key={i} className="hover:bg-purple-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{r.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{r.employee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {r.leads}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          {r.conversions}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Export Buttons */}
            <div className="px-6 py-5 bg-gray-50 border-t border-gray-200 flex flex-wrap gap-3">
              <button
                onClick={exportPDF}
                className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-red-700 transition-colors shadow-md"
              >
                <FileDown size={18} /> Download PDF
              </button>

              <button
                onClick={exportExcel}
                className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-md"
              >
                <FileSpreadsheet size={18} /> Download Excel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}