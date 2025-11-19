import { useState } from "react";
import { Plus, Edit, Trash2, Phone, Mail, X, Search, Filter, MoreVertical, Eye } from "lucide-react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

export default function AdminLeads() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterSource, setFilterSource] = useState("All");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const [leads, setLeads] = useState([
    { 
      id: 1, 
      name: "Suresh Kumar", 
      email: "suresh@gmail.com", 
      phone: "9876543210", 
      status: "New", 
      source: "Website",
      createdAt: "2025-01-15"
    },
    { 
      id: 2, 
      name: "Priya Sharma", 
      email: "priya@gmail.com", 
      phone: "9988776655", 
      status: "Contacted", 
      source: "Referral",
      createdAt: "2025-01-14"
    },
    { 
      id: 3, 
      name: "Kumar Patel", 
      email: "kumar@gmail.com", 
      phone: "9876512340", 
      status: "Interested", 
      source: "Instagram",
      createdAt: "2025-01-13"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingLead, setEditingLead] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "New",
    source: "Website",
  });

  const openAddForm = () => {
    setForm({ name: "", email: "", phone: "", status: "New", source: "Website" });
    setEditingLead(null);
    setShowModal(true);
  };

  const openEditForm = (lead) => {
    setForm(lead);
    setEditingLead(lead.id);
    setShowModal(true);
    setActiveDropdown(null);
  };

  const saveLead = () => {
    if (editingLead) {
      setLeads(leads.map((l) => (l.id === editingLead ? form : l)));
    } else {
      setLeads([...leads, { ...form, id: leads.length + 1, createdAt: new Date().toISOString().split('T')[0] }]);
    }
    setShowModal(false);
  };

  const deleteLead = (id) => {
    setLeads(leads.filter((l) => l.id !== id));
    setActiveDropdown(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingLead(null);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  // Filter leads
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         lead.phone.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || lead.status === filterStatus;
    const matchesSource = filterSource === "All" || lead.source === filterSource;
    return matchesSearch && matchesStatus && matchesSource;
  });

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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-800">Leads Management</h1>

            <button
              onClick={openAddForm}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="size-4" /> Add Lead
            </button>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-4 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search leads by name, email, or phone..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            
            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-32"
                >
                  <option value="All">All Status</option>
                  <option value="New">New</option>
                  <option value="Contacted">Contacted</option>
                  <option value="Interested">Interested</option>
                  <option value="Not Interested">Not Interested</option>
                  <option value="Converted">Converted</option>
                </select>
              </div>

              <div className="relative">
                <select
                  value={filterSource}
                  onChange={(e) => setFilterSource(e.target.value)}
                  className="pl-3 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white min-w-32"
                >
                  <option value="All">All Sources</option>
                  <option value="Website">Website</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Referral">Referral</option>
                  <option value="Cold Call">Cold Call</option>
                </select>
              </div>
            </div>
          </div>

          {/* Enhanced Leads Table with Indigo Header */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-indigo-500">
                    <th className="p-4 font-semibold text-white text-left min-w-48">Lead Details</th>
                    <th className="p-4 font-semibold text-white text-left min-w-40">Contact Info</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Status</th>
                    <th className="p-4 font-semibold text-white text-left min-w-32">Source</th>
                    <th className="p-4 font-semibold text-white text-left min-w-36">Created</th>
                    <th className="p-4 font-semibold text-white text-right min-w-20">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <User className="size-4 text-indigo-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-slate-800 group-hover:text-indigo-600 transition-colors truncate">
                              {lead.name}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">Lead #{lead.id}</p>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Mail className="size-4 text-slate-400" />
                            <span className="text-sm truncate">{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Phone className="size-4 text-slate-400" />
                            <span className="text-sm">{lead.phone}</span>
                          </div>
                        </div>
                      </td>

                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            lead.status === "New"
                              ? "text-blue-700 bg-blue-50 border border-blue-200"
                              : lead.status === "Contacted"
                              ? "text-yellow-700 bg-yellow-50 border border-yellow-200"
                              : lead.status === "Interested"
                              ? "text-green-700 bg-green-50 border border-green-200"
                              : lead.status === "Converted"
                              ? "text-purple-700 bg-purple-50 border border-purple-200"
                              : "text-red-700 bg-red-50 border border-red-200"
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>

                      <td className="p-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200">
                          {lead.source}
                        </span>
                      </td>

                      <td className="p-4">
                        <div className="text-slate-600 text-sm">
                          {lead.createdAt}
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100"
                            onClick={() => openEditForm(lead)}
                            title="View details"
                          >
                            <Eye className="size-4" />
                          </button>

                          <button
                            className="text-slate-400 hover:text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
                            onClick={() => openEditForm(lead)}
                            title="Edit lead"
                          >
                            <Edit className="size-4" />
                          </button>

                          <div className="relative">
                            <button
                              className="text-slate-400 hover:text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                              onClick={() => toggleDropdown(lead.id)}
                              title="More options"
                            >
                              <MoreVertical className="size-4" />
                            </button>

                            {activeDropdown === lead.id && (
                              <div className="absolute right-0 top-10 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-10 min-w-32">
                                <button
                                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-2"
                                  onClick={() => openEditForm(lead)}
                                >
                                  <Edit className="size-4" />
                                  Edit
                                </button>
                                <button
                                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                                  onClick={() => deleteLead(lead.id)}
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
                  ))}
                </tbody>
              </table>
            </div>

            {filteredLeads.length === 0 && (
              <div className="text-center py-12">
                <User className="size-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-600 mb-2">No leads found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={openAddForm}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Add New Lead
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
            <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-indigo-500 text-white rounded-t-xl">
              <h2 className="text-xl font-bold">
                {editingLead ? "Edit Lead" : "Add New Lead"}
              </h2>
              <button
                onClick={closeModal}
                className="text-white hover:text-indigo-100 p-1 rounded-lg hover:bg-indigo-400 transition-colors"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Interested">Interested</option>
                    <option value="Not Interested">Not Interested</option>
                    <option value="Converted">Converted</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Source
                  </label>
                  <select
                    className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    value={form.source}
                    onChange={(e) => setForm({ ...form, source: e.target.value })}
                  >
                    <option value="Website">Website</option>
                    <option value="Facebook">Facebook</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Referral">Referral</option>
                    <option value="Cold Call">Cold Call</option>
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
                onClick={saveLead}
                className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
              >
                {editingLead ? "Update Lead" : "Save Lead"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// User icon component
const User = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);