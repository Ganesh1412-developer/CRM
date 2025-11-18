import {
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  Bell,
  Search,
  Settings,
  LogOut,
  User
} from "lucide-react";

export default function Navbar({
  onToggleSidebar,
  onToggleDesktopSidebar,
  isDesktopSidebarCollapsed
}) {
  // Get user role from localStorage
  const userRole = localStorage.getItem("userRole") || "customer";

  const getRoleDisplayName = (role) => {
    const roleNames = {
      admin: "Administrator",
      manager: "Manager",
      employee: "Employee",
      customer: "Customer"
    };
    return roleNames[role] || role;
  };

  const getUserInitials = () => {
    return getRoleDisplayName(userRole).charAt(0).toUpperCase();
  };

  const getUserDisplayName = () => {
    return getRoleDisplayName(userRole);
  };

  const getDisplayRole = () => {
    return getRoleDisplayName(userRole);
  };

  const getDashboardTitle = () => {
    const titles = {
      admin: "Admin Dashboard",
      manager: "Manager Dashboard",
      employee: "Employee Dashboard",
      customer: "Customer Dashboard"
    };
    return titles[userRole] || "Dashboard";
  };

  const getDashboardSubtitle = () => {
    const subtitles = {
      admin: "System administration and management",
      manager: "Team and project oversight",
      employee: "Personal tasks and performance",
      customer: "Account and service management"
    };
    return subtitles[userRole] || "Welcome back to your workspace";
  };

  return (
    <header className="h-100 sm:h-14  bg-white border-b border-slate-200 flex items-center justify-between px-3 sm:px-6 sticky top-0 z-20 shadow-sm">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Menu */}
        <button
          className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
          onClick={onToggleSidebar}
          aria-label="Toggle mobile menu"
        >
          <Menu className="size-4 sm:size-5" />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button
          className={`hidden md:block p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 transition-colors ${
            isDesktopSidebarCollapsed
              ? "text-blue-600 bg-blue-50"
              : "text-slate-600 hover:text-slate-900"
          }`}
          onClick={onToggleDesktopSidebar}
          aria-label="Toggle sidebar"
        >
          {isDesktopSidebarCollapsed ? (
            <PanelLeftOpen className="size-4 sm:size-5" />
          ) : (
            <PanelLeftClose className="size-4 sm:size-5" />
          )}
        </button>

        {/* Page Title */}
        <div className="hidden sm:block">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 truncate">
            {getDashboardTitle()}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 -mt-0.5 sm:-mt-1 truncate">
            {getDashboardSubtitle()}
          </p>
        </div>

        {/* Mobile Page Title */}
        <div className="block sm:hidden">
          <h2 className="text-base font-bold text-slate-900">
            {getDashboardTitle()}
          </h2>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-1 sm:gap-3">
        {/* Search (mobile) */}
        <button className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
          <Search className="size-4 sm:size-5" />
        </button>

        {/* Notifications */}
        <button className="relative p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
          <Bell className="size-4 sm:size-5" />
          <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></span>
          </span>
        </button>

        {/* Settings (desktop only) */}
        <button className="hidden md:block p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors">
          <Settings className="size-4 sm:size-5" />
        </button>

        {/* User section */}
        <div className="flex items-center gap-2 sm:gap-3 pl-2 sm:pl-3 border-l border-slate-200">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-slate-900 truncate max-w-24 lg:max-w-32">
              {getUserDisplayName()}
            </p>
            <p className="text-xs text-slate-500 -mt-0.5 truncate max-w-24 lg:max-w-32">
              {getDisplayRole()}
            </p>
          </div>

          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center text-white font-semibold text-xs sm:text-sm shadow-sm bg-gradient-to-br from-blue-600 to-blue-700">
            {getUserInitials()}
          </div>
        </div>

        {/* Logout Button */}
        <button
          className="ml-1 sm:ml-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-sm hover:shadow-md transition-all duration-200 font-medium px-2 sm:px-4 py-1.5 sm:py-2 text-sm rounded-lg"
          onClick={() => {
            localStorage.removeItem("userRole");
            window.location.href = "/login";
          }}
        >
          <span className="hidden sm:inline">Logout</span>
          <span className="sm:hidden">
            <LogOut className="size-4" />
          </span>
        </button>
      </div>
    </header>
  );
}
