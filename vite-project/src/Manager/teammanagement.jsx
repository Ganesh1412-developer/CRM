import React, { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function ManagerTeamManagement() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [employees, setEmployees] = useState([
    { id: 1, name: "Ravi Kumar", role: "Sales Executive", leads: 42, performance: "Good" },
    { id: 2, name: "Priya Sharma", role: "Tele Caller", leads: 30, performance: "Average" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [showPerformance, setShowPerformance] = useState(false);
  const [performanceData, setPerformanceData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
  });

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const openAddForm = () => {
    setEditingEmployee(null);
    setFormData({ name: "", role: "" });
    setShowForm(true);
  };

  const openEditForm = (emp) => {
    setEditingEmployee(emp);
    setFormData({ name: emp.name, role: emp.role });
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === editingEmployee.id ? { ...emp, ...formData } : emp
        )
      );
    } else {
      setEmployees([
        ...employees,
        {
          id: employees.length + 1,
          ...formData,
          leads: 0,
          performance: "Not Rated",
        },
      ]);
    }
    setShowForm(false);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const openPerformance = (emp) => {
    setPerformanceData(emp);
    setShowPerformance(true);
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

        {/* Team Management Content */}
        <div className="p-6">

          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-6">Team Management</h1>

          {/* Add Employee Button */}
          <button
            onClick={openAddForm}
            className="mb-5 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors"
          >
            <Plus size={20} /> Add Employee
          </button>

          {/* EMPLOYEES TABLE */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Team Members</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Leads</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Performance</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-purple-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">{emp.name}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">{emp.role}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                          {emp.leads}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          emp.performance === 'Good' ? 'bg-green-100 text-green-800' :
                          emp.performance === 'Average' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {emp.performance}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditForm(emp)}
                            className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors duration-150"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>

                          <button
                            onClick={() => deleteEmployee(emp.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-150"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>

                          <button
                            onClick={() => openPerformance(emp)}
                            className="px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100 rounded-lg transition-colors duration-150"
                          >
                            View Performance
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* ADD / EDIT FORM MODAL (placed correctly inside main container) */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">

              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-4">
                {editingEmployee ? "Edit Employee" : "Add Employee"}
              </h2>

              <input
                className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Employee Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <input
                className="w-full border p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Role"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-purple-600 text-white p-2 rounded mt-2 hover:bg-purple-700 transition-colors"
              >
                {editingEmployee ? "Update Employee" : "Add Employee"}
              </button>
            </div>
          </div>
        )}

        {/* PERFORMANCE MODAL */}
        {showPerformance && performanceData && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
              <button
                onClick={() => setShowPerformance(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold mb-4">Performance Details</h2>

              <p className="mb-2"><strong>Name:</strong> {performanceData.name}</p>
              <p className="mb-2"><strong>Role:</strong> {performanceData.role}</p>
              <p className="mb-2"><strong>Leads handled:</strong> {performanceData.leads}</p>
              <p className="mb-2"><strong>Performance Rating:</strong> {performanceData.performance}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}