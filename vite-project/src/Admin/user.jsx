import { useState } from "react";
import { Plus, Edit, Trash2, Calendar, User, ClipboardList, X, Search, Filter, MoreVertical, Eye, Download } from "lucide-react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function AdminTasks() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Prepare monthly sales report",
      assignedTo: "Manager - Priya",
      priority: "High",
      dueDate: "2025-01-20",
      status: "Pending",
      description: "Compile and analyze sales data for monthly performance review"
    },
    {
      id: 2,
      title: "Call 20 new leads",
      assignedTo: "Employee - Suresh",
      priority: "Medium",
      dueDate: "2025-01-18",
      status: "In Progress",
      description: "Follow up with new leads from the marketing campaign"
    },
    {
      id: 3,
      title: "Update client database",
      assignedTo: "Employee - Kiran",
      priority: "Low",
      dueDate: "2025-01-25",
      status: "Completed",
      description: "Clean and update client contact information"
    },
    {
      id: 4,
      title: "Team training session",
      assignedTo: "Manager - Ramesh",
      priority: "High",
      dueDate: "2025-01-22",
      status: "Pending",
      description: "Conduct training on new software features"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [form, setForm] = useState({
    title: "",
    assignedTo: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
    description: ""
  });

  const openAddForm = () => {
    setForm({ title: "", assignedTo: "", priority: "Medium", dueDate: "", status: "Pending", description: "" });
    setEditingTask(null);
    setShowModal(true);
  };

  const openEditForm = (task) => {
    setForm(task);
    setEditingTask(task.id);
    setShowModal(true);
    setActiveDropdown(null);
  };

  const saveTask = () => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask ? form : t)));
    } else {
      setTasks([...tasks, { ...form, id: tasks.length + 1 }]);
    }
    setShowModal(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    setActiveDropdown(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.assignedTo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || task.status === filterStatus;
    const matchesPriority = filterPriority === "All" || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getDaysUntilDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onClose={() => setMobileSidebarOpen(false)}
        mobile={mobileSidebarOpen}
      />

      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16 lg:ml-20' : 'md:ml-2'}`}>
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleDesktopSidebar={toggleDesktopSidebar}
          isDesktopSidebarCollapsed={sidebarCollapsed}
        />

        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Task Management</h1>
              <p className="text-slate-600 mt-1">Manage and track all team tasks</p>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors">
                <Download className="size-4" />
                Export
              </button>
              <button
                onClick={openAddForm}
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
              >
                <Plus className="size-4" /> Add Task
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Total Tasks</p>
                  <p className="text-2xl font-bold text-slate-800 mt-1">{tasks.length}</p>
                </div>
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <ClipboardList className="size-5 text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Pending</p>
                  <p className="text-2xl font-bold text-orange-600 mt-1">
                    {tasks.filter(t => t.status === "Pending").length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="size-5 text-orange-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600 mt-1">
                    {tasks.filter(t => t.status === "In Progress").length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="size-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600 mt-1">
                    {tasks.filter(t => t.status === "Completed").length}
                  </p>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <ClipboardList className="size-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm p-4 mb-6 border border-slate-200">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tasks, assignees, or descriptions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                />
              </div>
              
              <div className="flex gap-3">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white min-w-32"
                  >
                    <option value="All">All Status</option>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </div>

                <div className="relative">
                  <select
                    value={filterPriority}
                    onChange={(e) => setFilterPriority(e.target.value)}
                    className="pl-3 pr-8 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white min-w-32"
                  >
                    <option value="All">All Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Tasks Table with Indigo Header */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-600 to-indigo-700">
                    <th className="p-4 font-semibold text-white text-left min-w-60">Task Details</th>
                    <th className="p-4 font-semibold text-white text-left min-w-40">Assignee</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Priority</th>
                    <th className="p-4 font-semibold text-white text-left min-w-36">Due Date</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Status</th>
                    <th className="p-4 font-semibold text-white text-right min-w-20">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {filteredTasks.map((task) => {
                    const daysUntilDue = getDaysUntilDue(task.dueDate);
                    const isOverdue = daysUntilDue < 0;
                    const isDueSoon = daysUntilDue <= 3 && daysUntilDue >= 0;
                    
                    return (
                      <tr key={task.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                              <ClipboardList className="size-4 text-indigo-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                                {task.title}
                              </h3>
                              <p className="text-sm text-slate-600 mt-1 line-clamp-2">
                                {task.description}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <User className="size-4 text-slate-600" />
                            </div>
                            <span className="text-slate-700 font-medium">{task.assignedTo}</span>
                          </div>
                        </td>

                        <td className="p-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              task.priority === "High"
                                ? "text-red-700 bg-red-50 border border-red-200"
                                : task.priority === "Medium"
                                ? "text-yellow-700 bg-yellow-50 border border-yellow-200"
                                : "text-green-700 bg-green-50 border border-green-200"
                            }`}
                          >
                            {task.priority}
                          </span>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Calendar className={`size-4 ${
                              isOverdue ? "text-red-500" : 
                              isDueSoon ? "text-orange-500" : 
                              "text-slate-400"
                            }`} />
                            <div>
                              <div className="text-slate-700 font-medium">{task.dueDate}</div>
                              {!isOverdue && !isDueSoon && daysUntilDue > 3 && (
                                <div className="text-xs text-slate-500">{daysUntilDue} days left</div>
                              )}
                              {isDueSoon && (
                                <div className="text-xs text-orange-600 font-medium">Due soon</div>
                              )}
                              {isOverdue && (
                                <div className="text-xs text-red-600 font-medium">Overdue</div>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="p-4">
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                              task.status === "Completed"
                                ? "text-green-700 bg-green-50 border border-green-200"
                                : task.status === "In Progress"
                                ? "text-blue-700 bg-blue-50 border border-blue-200"
                                : task.status === "Pending"
                                ? "text-slate-700 bg-slate-50 border border-slate-200"
                                : "text-orange-700 bg-orange-50 border border-orange-200"
                            }`}
                          >
                            {task.status}
                          </span>
                        </td>

                        <td className="p-4">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
                              onClick={() => openEditForm(task)}
                              title="View details"
                            >
                              <Eye className="size-4" />
                            </button>

                            <button
                              className="text-slate-400 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                              onClick={() => openEditForm(task)}
                              title="Edit task"
                            >
                              <Edit className="size-4" />
                            </button>

                            <div className="relative">
                              <button
                                className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                                onClick={() => toggleDropdown(task.id)}
                                title="More options"
                              >
                                <MoreVertical className="size-4" />
                              </button>

                              {activeDropdown === task.id && (
                                <div className="absolute right-0 top-10 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-10 min-w-32">
                                  <button
                                    className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                    onClick={() => openEditForm(task)}
                                  >
                                    <Edit className="size-4" />
                                    Edit
                                  </button>
                                  <button
                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                    onClick={() => deleteTask(task.id)}
                                  >
                                    <Trash2 className="size-4" />
                                    Delete
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {filteredTasks.length === 0 && (
              <div className="text-center py-12">
                <ClipboardList className="size-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">No tasks found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={openAddForm}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Create New Task
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal/Popup */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-xl">
              <h2 className="text-xl font-bold">
                {editingTask ? "Edit Task" : "Create New Task"}
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-indigo-100 p-1 rounded-lg hover:bg-indigo-500 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Task Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter task title"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Enter task description"
                    rows="3"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Assign To *
                  </label>
                  <select
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.assignedTo}
                    onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
                  >
                    <option value="">Select assignee</option>
                    <option value="Manager - Priya">Manager - Priya</option>
                    <option value="Manager - Ramesh">Manager - Ramesh</option>
                    <option value="Employee - Suresh">Employee - Suresh</option>
                    <option value="Employee - Kiran">Employee - Kiran</option>
                    <option value="Employee - Divya">Employee - Divya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Priority
                  </label>
                  <select
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.priority}
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                  >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.dueDate}
                    onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Status
                  </label>
                  <select
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="On Hold">On Hold</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 p-6 border-t border-slate-200 bg-slate-50 rounded-b-xl">
              <button
                onClick={closeModal}
                className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium rounded-lg hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={saveTask}
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                {editingTask ? "Update Task" : "Create Task"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}