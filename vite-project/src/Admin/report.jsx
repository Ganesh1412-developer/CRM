import React, { useState } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend
} from "recharts";
import { TrendingUp, Users, Target, Star, Award, Calendar } from "lucide-react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function EmployeePerformance() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const [employees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Sales Executive",
      tasksCompleted: 35,
      pending: 5,
      rating: 4.5,
      productivity: 85,
      attendance: 95,
      projects: 12,
      department: "Sales"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Manager",
      tasksCompleted: 50,
      pending: 2,
      rating: 4.9,
      productivity: 92,
      attendance: 98,
      projects: 18,
      department: "Marketing"
    },
    {
      id: 3,
      name: "Arun Kumar",
      role: "Support Staff",
      tasksCompleted: 20,
      pending: 8,
      rating: 3.9,
      productivity: 78,
      attendance: 88,
      projects: 8,
      department: "Support"
    },
    {
      id: 4,
      name: "Sarah Chen",
      role: "Developer",
      tasksCompleted: 45,
      pending: 3,
      rating: 4.7,
      productivity: 90,
      attendance: 96,
      projects: 15,
      department: "IT"
    },
    {
      id: 5,
      name: "Mike Johnson",
      role: "HR Manager",
      tasksCompleted: 28,
      pending: 4,
      rating: 4.2,
      productivity: 82,
      attendance: 92,
      projects: 10,
      department: "HR"
    }
  ]);

  const performanceData = [
    { month: 'Jan', productivity: 85, tasks: 120 },
    { month: 'Feb', productivity: 78, tasks: 95 },
    { month: 'Mar', productivity: 82, tasks: 110 },
    { month: 'Apr', productivity: 88, tasks: 130 },
    { month: 'May', productivity: 92, tasks: 145 },
    { month: 'Jun', productivity: 90, tasks: 140 },
  ];

  const departmentData = [
    { name: 'Sales', value: 25 },
    { name: 'Marketing', value: 20 },
    { name: 'IT', value: 30 },
    { name: 'Support', value: 15 },
    { name: 'HR', value: 10 },
  ];

  const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return "text-green-600 bg-green-50 border-green-200";
    if (rating >= 4.0) return "text-blue-600 bg-blue-50 border-blue-200";
    if (rating >= 3.5) return "text-yellow-600 bg-yellow-50 border-yellow-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getProductivityColor = (productivity) => {
    if (productivity >= 90) return "text-green-600";
    if (productivity >= 80) return "text-blue-600";
    if (productivity >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
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
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Employee Performance</h1>
              <p className="text-slate-600 mt-1">Track and analyze team performance metrics</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                <Calendar className="size-4" />
                This Month
              </button>
              <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                <TrendingUp className="size-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Employees</p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">{employees.length}</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="size-5 text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Average Rating</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    {(
                      employees.reduce((acc, emp) => acc + emp.rating, 0) /
                      employees.length
                    ).toFixed(1)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Star className="size-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Tasks Completed</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    {employees.reduce((a, b) => a + b.tasksCompleted, 0)}
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="size-5 text-green-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Avg Productivity</p>
                  <p className="text-2xl font-bold text-purple-600 mt-1">
                    {Math.round(employees.reduce((a, b) => a + b.productivity, 0) / employees.length)}%
                  </p>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="size-5 text-purple-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Performance Trend Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Performance Trend</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="month" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="productivity" 
                    stroke="#4f46e5" 
                    strokeWidth={2}
                    name="Productivity %"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="tasks" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Tasks Completed"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Department Distribution */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Department Distribution</h2>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Enhanced Performance Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h2 className="text-lg font-semibold text-slate-800">Employee Performance Details</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-500">
                    <th className="p-4 font-semibold text-white text-left min-w-48">Employee</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Department</th>
                    <th className="p-4 font-semibold text-white text-left min-w-28">Completed</th>
                    <th className="p-4 font-semibold text-white text-left min-w-28">Pending</th>
                    <th className="p-4 font-semibold text-white text-left min-w-28">Projects</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Productivity</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Attendance</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {employees.map((emp) => (
                    <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Users className="size-4 text-indigo-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-800">{emp.name}</div>
                            <div className="text-sm text-slate-500">{emp.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-slate-700">{emp.department}</td>
                      <td className="p-4">
                        <span className="font-semibold text-green-600">{emp.tasksCompleted}</span>
                      </td>
                      <td className="p-4">
                        <span className="font-semibold text-orange-600">{emp.pending}</span>
                      </td>
                      <td className="p-4 text-slate-700">{emp.projects}</td>
                      <td className="p-4">
                        <span className={`font-semibold ${getProductivityColor(emp.productivity)}`}>
                          {emp.productivity}%
                        </span>
                      </td>
                      <td className="p-4 text-slate-700">{emp.attendance}%</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getRatingColor(emp.rating)}`}>
                          <Star className="size-3 mr-1" />
                          {emp.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}