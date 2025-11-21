import React, { useState } from "react";
import { Check, X, Eye, Calendar, User, FileText } from "lucide-react";
import Navbar from "../Navbar/Navbar.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";

export default function ManagerApproval() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "Lead Closure",
      employee: "Ravi Kumar",
      details: "Lead #1243 marked as closed.",
      status: "Pending",
      date: "2025-11-18",
    },
    {
      id: 2,
      type: "Leave Request",
      employee: "Priya Sharma",
      details: "Requesting leave for 21 Nov 2025.",
      status: "Pending",
      date: "2025-11-17",
    },
    {
      id: 3,
      type: "Task Completion",
      employee: "Suresh R",
      details: "Completed Task: Follow-up call list update.",
      status: "Pending",
      date: "2025-11-17",
    },
  ]);

  const [viewModal, setViewModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const toggleSidebar = () => setMobileSidebarOpen(!mobileSidebarOpen);
  const toggleDesktopSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  const openViewModal = (req) => {
    setSelectedRequest(req);
    setViewModal(true);
  };

  const updateRequestStatus = (id, newStatus) => {
    setRequests(
      requests.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
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
          sidebarCollapsed ? "md:ml-16 lg:ml-20" : "md:ml-2"
        }`}
      >
        <Navbar
          onToggleSidebar={toggleSidebar}
          onToggleDesktopSidebar={toggleDesktopSidebar}
          isDesktopSidebarCollapsed={sidebarCollapsed}
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Approval Requests</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Pending Approvals</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-50 to-purple-100 border-b border-purple-200">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Employee</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Details</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {requests.map((req) => (
                    <tr key={req.id} className="hover:bg-purple-50 transition-colors duration-150">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <FileText size={16} className="text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{req.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <User size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{req.employee}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-gray-600 line-clamp-2">{req.details}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{req.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                            req.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : req.status === "Rejected"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {req.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openViewModal(req)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors duration-150"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>

                          {req.status === "Pending" && (
                            <>
                              <button
                                onClick={() => updateRequestStatus(req.id, "Approved")}
                                className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors duration-150"
                                title="Approve"
                              >
                                <Check size={18} />
                              </button>

                              <button
                                onClick={() => updateRequestStatus(req.id, "Rejected")}
                                className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors duration-150"
                                title="Reject"
                              >
                                <X size={18} />
                              </button>
                            </>
                          )}
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

      {/* VIEW MODAL */}
      {viewModal && selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setViewModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold mb-4">Request Details</h2>

            <p className="mb-2"><strong>Type:</strong> {selectedRequest.type}</p>
            <p className="mb-2"><strong>Employee:</strong> {selectedRequest.employee}</p>
            <p className="mb-2"><strong>Date:</strong> {selectedRequest.date}</p>
            <p className="mt-3 mb-1">
              <strong>Details:</strong>
            </p>
            <p className="text-gray-600">{selectedRequest.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}