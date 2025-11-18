import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Users, Package, ShoppingCart, FileText, Settings,
  User, BarChart3, LogOut, X
} from 'lucide-react';

const linkBase =
  "flex items-center gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm font-medium transition-all duration-200 group relative";

const active = ({ isActive }) =>
  isActive
    ? `${linkBase} bg-purple-500 text-white shadow-lg shadow-purple-500/25`
    : `${linkBase} text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:shadow-sm`;

const MENU_CONFIG = {
  admin: [
    { to: '/admin/dashboard', label: 'Admin Dashboard', icon: LayoutDashboard },
    { to: '/admin/users', label: 'User Management', icon: Users },
    { to: '/admin/roles', label: 'Role Management', icon: Settings },
    { to: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { to: '/admin/reports', label: 'System Reports', icon: FileText },
    { to: '/admin/settings', label: 'System Settings', icon: Settings },
  ],
  manager: [
    { to: '/manager/dashboard', label: 'Manager Dashboard', icon: LayoutDashboard },
    { to: '/manager/team', label: 'Team Management', icon: Users },
    { to: '/manager/projects', label: 'Project Oversight', icon: Package },
    { to: '/manager/performance', label: 'Performance Metrics', icon: BarChart3 },
    { to: '/manager/reports', label: 'Team Reports', icon: FileText },
    { to: '/manager/approvals', label: 'Approvals', icon: Settings },
  ],
  employee: [
    { to: '/employee/dashboard', label: 'My Dashboard', icon: LayoutDashboard },
    { to: '/employee/tasks', label: 'My Tasks', icon: Package },
    { to: '/employee/time', label: 'Time Tracking', icon: BarChart3 },
    { to: '/employee/attendance', label: 'Attendance', icon: User },
    { to: '/employee/performance', label: 'My Performance', icon: FileText },
    { to: '/employee/profile', label: 'My Profile', icon: User },
  ],
  customer: [
    { to: '/customer/dashboard', label: 'My Dashboard', icon: LayoutDashboard },
    { to: '/customer/profile', label: 'My Profile', icon: User },
    { to: '/customer/orders', label: 'My Orders', icon: ShoppingCart },
    { to: '/customer/support', label: 'Support Center', icon: FileText },
    { to: '/customer/invoices', label: 'Invoices', icon: BarChart3 },
    { to: '/customer/history', label: 'Order History', icon: Package },
  ],
};

export default function Sidebar({ isCollapsed, onClose, mobile }) {
  const userRole = localStorage.getItem('userRole') || 'customer';
  const menu = MENU_CONFIG[userRole] || MENU_CONFIG.customer;

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  return (
    <>
      {/* Mobile Overlay */}
      {mobile && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={
          mobile
            ? "fixed inset-y-0 left-0 z-50 w-64 sm:w-72 bg-white border-r border-slate-200 flex flex-col shadow-2xl transform transition-transform duration-300 md:hidden"
            : `h-screen bg-white border-r border-slate-200 sticky top-0 hidden md:flex flex-col transition-all duration-300 shadow-sm ${
                isCollapsed ? 'w-16 lg:w-20' : 'w-64 lg:w-72'
              }`
        }
      >
        {/* HEADER */}
        <div className={`h-14 sm:h-16 border-b border-slate-200 flex items-center px-3 sm:px-6 bg-gradient-to-r from-slate-50 to-white ${isCollapsed && !mobile ? 'justify-center' : 'justify-between'}`}>
          <div className={`flex items-center gap-2 sm:gap-3 ${isCollapsed && !mobile ? 'justify-center' : ''}`}>
            {(!isCollapsed || mobile) && (
              <h2 className="text-lg font-bold text-slate-800">CRM Suite</h2>
            )}
          </div>

          {(mobile || !isCollapsed) && (
            <button
              className="p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-500"
              onClick={onClose}
            >
              <X className="size-4 sm:size-5" />
            </button>
          )}
        </div>

        {/* MENU */}
        <nav
          className={`flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto ${
            isCollapsed && !mobile ? 'flex flex-col items-center' : ''
          }`}
        >
          {menu.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={active}
              onClick={mobile ? onClose : undefined}
              end
            >
              <Icon className="size-4 sm:size-5" />

              {(!isCollapsed || mobile) && (
                <span className="transition-transform truncate">
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* LOGOUT */}
        <div className={`p-3 sm:p-4 border-t border-slate-200 bg-slate-50/50 ${isCollapsed && !mobile ? 'flex justify-center' : ''}`}>
          <button
            className={`w-full flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-medium text-sm rounded-lg shadow-lg transition-all ${
              isCollapsed && !mobile ? 'justify-center px-2 py-2' : 'px-3 sm:px-4 py-2 sm:py-2.5'
            }`}
            onClick={handleLogout}
          >
            <LogOut className="size-4" />
            {(!isCollapsed || mobile) && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}
