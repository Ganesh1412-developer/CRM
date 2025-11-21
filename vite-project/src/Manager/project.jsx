import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Plus, Edit, Trash2, X, Calendar, CheckCircle } from "lucide-react";

export default function ManagerTaskManagement() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);
  const toggleDesktopSidebar = () =>
    setSidebarCollapsed(!sidebarCollapsed);

  // Sample Employees
  const employees = ["Ravi Kumar", "Priya Sharma", "John Peter"];

  // Task Data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Follow-up pending leads",
      employee: "Ravi Kumar",
      deadline: "2025-11-20",
      priority: "High",
      status: "In Progress",
      description: "Call 20 pending leads and update CRM.",
    },
    {
      id: 2,
      title: "Daily call log",
      employee: "Priya Sharma",
      deadline: "2025-11-19",
      priority: "Medium",
      status: "Not Started",
      description: "Prepare and submit daily call report.",
    },
  ]);

  // Modal States
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [taskDetails, setTaskDetails] = useState(null);

  // Form Data
  const [formData, setFormData] = useState({
    title: "",
    employee: "",
    deadline: "",
    priority: "Low",
    status: "Not Started",
    description: "",
  });

  const openAddTask = () => {
    setEditingTask(null);
    setFormData({
      title: "",
      employee: "",
      deadline: "",
      priority: "Low",
      status: "Not Started",
      description: "",
    });
    setShowForm(true);
  };

  const openEditTask = (task) => {
    setEditingTask(task);
    setFormData(task);
    setShowForm(true);
  };

  const saveTask = () => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? formData : t)));
    } else {
      setTasks([
        ...tasks,
        { ...formData, id: tasks.length + 1 },
      ]);
    }
    setShowForm(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const openTaskDetails = (task) => {
    setTaskDetails(task);
    setShowDetails(true);
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
          <h1 className="text-3xl font-bold mb-6">Project / Task Management</h1>

          {/* Add Task Button */}
          <button
            onClick={openAddTask}
            className="mb-5 flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow hover:bg-purple-700 transition-colors"
          >
            <Plus size={20} /> Add New Task
          </button>

          {/* Tasks Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Tasks List</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Task</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Assigned To</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Deadline</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {tasks.map((task) => (
                    <tr key={task.id} className="hover:bg-purple-50 transition-colors duration-150">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-gray-900">{task.title}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-600">{task.employee}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Calendar size={16} className="text-gray-400" />
                          {task.deadline}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          task.priority === 'High' ? 'bg-red-100 text-red-800' :
                          task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {task.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          task.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          task.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {task.status === 'Completed' && <CheckCircle size={14} className="mr-1" />}
                          {task.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openEditTask(task)}
                            className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors duration-150"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>

                          <button
                            onClick={() => deleteTask(task.id)}
                            className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-150"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>

                          <button
                            onClick={() => openTaskDetails(task)}
                            className="px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100 rounded-lg transition-colors duration-150"
                          >
                            View
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
      </div>

      {/* ADD / EDIT TASK MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {editingTask ? "Edit Task" : "Add New Task"}
            </h2>

            <input
              className="border w-full p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Task Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />

            <label className="text-sm font-medium text-gray-700">Assign To</label>
            <select
              className="border w-full p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.employee}
              onChange={(e) =>
                setFormData({ ...formData, employee: e.target.value })
              }
            >
              <option value="">Select Employee</option>
              {employees.map((emp, i) => (
                <option key={i} value={emp}>
                  {emp}
                </option>
              ))}
            </select>

            <label className="text-sm font-medium text-gray-700">Deadline</label>
            <input
              type="date"
              className="border w-full p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.deadline}
              onChange={(e) =>
                setFormData({ ...formData, deadline: e.target.value })
              }
            />

            <label className="text-sm font-medium text-gray-700">Priority</label>
            <select
              className="border w-full p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <label className="text-sm font-medium text-gray-700">Status</label>
            <select
              className="border w-full p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option>Not Started</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <textarea
              className="border w-full p-2 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Task Description"
              rows="3"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>

            <button
              onClick={saveTask}
              className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors"
            >
              {editingTask ? "Save Changes" : "Add Task"}
            </button>
          </div>
        </div>
      )}

      {/* VIEW TASK DETAILS MODAL */}
      {showDetails && taskDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg relative">
            <button
              onClick={() => setShowDetails(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold mb-4">Task Details</h2>

            <p className="mb-2"><strong>Title:</strong> {taskDetails.title}</p>
            <p className="mb-2"><strong>Assigned To:</strong> {taskDetails.employee}</p>
            <p className="mb-2"><strong>Deadline:</strong> {taskDetails.deadline}</p>
            <p className="mb-2"><strong>Priority:</strong> {taskDetails.priority}</p>
            <p className="mb-2"><strong>Status:</strong> {taskDetails.status}</p>
            <p className="mt-3 mb-1"><strong>Description:</strong></p>
            <p className="text-gray-600">{taskDetails.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}