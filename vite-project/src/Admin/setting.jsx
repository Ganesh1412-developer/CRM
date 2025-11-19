// src/Pages/Admin/AdminSettings.jsx
import React, { useEffect, useState } from "react";
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

/**
 * Simple role-permission manager:
 * - roles: list of named roles with permission keys
 * - permissions: module keys you can toggle per role
 * Storage: localStorage (so changes persist during dev)
 */

const PERMISSIONS = [
  { key: "leads", label: "Leads Management" },
  { key: "customers", label: "Customer Management" },
  { key: "tasks", label: "Task Management" },
  { key: "reports", label: "Reports & Analytics" },
  { key: "settings", label: "System Settings" },
];

const DEFAULT_ROLES = [
  { id: "admin", name: "Admin", perms: { leads: true, customers: true, tasks: true, reports: true, settings: true } },
  { id: "manager", name: "Manager", perms: { leads: true, customers: true, tasks: true, reports: true, settings: false } },
  { id: "employee", name: "Employee", perms: { leads: true, customers: false, tasks: true, reports: false, settings: false } },
  { id: "customer", name: "Customer", perms: { leads: false, customers: true, tasks: false, reports: false, settings: false } },
];

export default function AdminSettings() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [newRoleName, setNewRoleName] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("crm_roles");
    if (saved) {
      setRoles(JSON.parse(saved));
    } else {
      setRoles(DEFAULT_ROLES);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("crm_roles", JSON.stringify(roles));
  }, [roles]);

  const selectRole = (id) => {
    const r = roles.find(r => r.id === id);
    setSelectedRole(r ? { ...r } : null);
  };

  const togglePerm = (permKey) => {
    if (!selectedRole) return;
    const updated = { ...selectedRole, perms: { ...selectedRole.perms, [permKey]: !selectedRole.perms[permKey] } };
    setSelectedRole(updated);
    setRoles(roles.map(r => r.id === updated.id ? updated : r));
  };

  const addRole = () => {
    if (!newRoleName.trim()) return;
    const id = newRoleName.trim().toLowerCase().replace(/\s+/g, "-");
    if (roles.some(r => r.id === id)) {
      alert("Role id already exists");
      return;
    }
    const newRole = { id, name: newRoleName.trim(), perms: PERMISSIONS.reduce((acc, p) => (acc[p.key] = false, acc), {}) };
    setRoles([ ...roles, newRole ]);
    setNewRoleName("");
  };

  const deleteRole = (id) => {
    if (!confirm("Delete role? This cannot be undone.")) return;
    setRoles(roles.filter(r => r.id !== id));
    if (selectedRole?.id === id) setSelectedRole(null);
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
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Settings — Roles & Permissions</h1>
              <p className="text-sm text-slate-500 mt-1">Create roles and toggle module access per role.</p>
            </div>
          </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Role list */}
        <div className="md:col-span-1 bg-white rounded-xl shadow p-4">
          <h3 className="font-semibold mb-3">Roles</h3>
          <ul className="space-y-2">
            {roles.map(r => (
              <li key={r.id} className={`flex items-center justify-between p-2 rounded ${selectedRole?.id === r.id ? 'bg-purple-50' : 'hover:bg-gray-50 cursor-pointer'}`} onClick={() => selectRole(r.id)}>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.id}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={(e) => { e.stopPropagation(); deleteRole(r.id); }} className="text-red-600 hover:text-red-800">Delete</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <input value={newRoleName} onChange={(e) => setNewRoleName(e.target.value)} placeholder="New role name" className="w-full p-2 border rounded-lg mb-2" />
            <button onClick={addRole} className="w-full bg-green-600 text-white p-2 rounded-lg">Add Role</button>
          </div>
        </div>

        {/* Permissions editor */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
          {!selectedRole ? (
            <div className="text-slate-500">Select a role to edit permissions.</div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{selectedRole.name}</h3>
                  <div className="text-xs text-slate-500">{selectedRole.id}</div>
                </div>
                <div>
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg" onClick={() => { localStorage.setItem('userRole', selectedRole.id); alert(`Simulated: set current user role to ${selectedRole.name}`); }}>
                    Simulate Login as Role
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {PERMISSIONS.map(p => (
                  <div key={p.key} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">{p.label}</div>
                      <div className="text-xs text-slate-500">Toggle access to this module</div>
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={!!selectedRole.perms[p.key]} onChange={() => togglePerm(p.key)} className="form-checkbox h-5 w-5 text-indigo-600" />
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-sm text-slate-500">
                Changes are saved locally (localStorage). Integrate with backend to persist centrally.
              </div>
            </>
          )}
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}
