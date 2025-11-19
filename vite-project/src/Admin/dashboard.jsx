import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings, FileText, TrendingUp, DollarSign, ShoppingCart, Activity, ArrowUp, ArrowDown, BarChart3 } from 'lucide-react';
import Navbar from '../Navbar/Navbar.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';

const AdminDashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const toggleDesktopSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      isPositive: true,
      icon: Users,
      color: 'bg-blue-500',
      lightColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      title: 'Revenue',
      value: '$48,652',
      change: '+8.2%',
      isPositive: true,
      icon: DollarSign,
      color: 'bg-green-500',
      lightColor: 'bg-green-50',
      textColor: 'text-green-600'
    },
    {
      title: 'Active Orders',
      value: '362',
      change: '-3.1%',
      isPositive: false,
      icon: ShoppingCart,
      color: 'bg-purple-500',
      lightColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      title: 'System Health',
      value: '99.2%',
      change: '+0.3%',
      isPositive: true,
      icon: Activity,
      color: 'bg-orange-500',
      lightColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  ];

  const quickActions = [
    {
      title: 'User Management',
      description: 'Manage users, roles, and permissions',
      icon: Users,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      link: '/admin/user'
    },
    {
      title: 'System Settings',
      description: 'Configure system-wide settings',
      icon: Settings,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      link: '/admin/settings'
    },
    {
      title: 'Reports',
      description: 'View and generate detailed reports',
      icon: FileText,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      link: '/admin/report'
    },
    {
      title: 'Analytics',
      description: 'Track performance metrics',
      icon: BarChart3,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      link: '/admin/analytics'
    }
  ];

  const recentActivity = [
    { action: 'New user registered', user: 'John Doe', time: '5 minutes ago', type: 'user' },
    { action: 'System backup completed', user: 'System', time: '1 hour ago', type: 'system' },
    { action: 'Report generated', user: 'Admin', time: '2 hours ago', type: 'report' },
    { action: 'Settings updated', user: 'Sarah Smith', time: '3 hours ago', type: 'settings' },
    { action: 'New order placed', user: 'Mike Johnson', time: '4 hours ago', type: 'order' }
  ];

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

        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Admin</h1>
            <p className="text-gray-600">Here's what's happening with your system today.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.lightColor} p-3 rounded-lg`}>
                    <stat.icon className={`w-6 h-6 ${stat.textColor}`} />
                  </div>
                  <div className={`flex items-center text-sm font-semibold ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.isPositive ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link} className="block group">
                  <div className={`${action.color} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-white transform group-hover:-translate-y-1`}>
                    <action.icon className="w-10 h-10 mb-4 opacity-90" />
                    <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                    <p className="text-sm opacity-90">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full ${
                        activity.type === 'user' ? 'bg-blue-100' :
                        activity.type === 'system' ? 'bg-green-100' :
                        activity.type === 'report' ? 'bg-purple-100' :
                        activity.type === 'settings' ? 'bg-orange-100' :
                        'bg-gray-100'
                      } flex items-center justify-center`}>
                        <Activity className={`w-5 h-5 ${
                          activity.type === 'user' ? 'text-blue-600' :
                          activity.type === 'system' ? 'text-green-600' :
                          activity.type === 'report' ? 'text-purple-600' :
                          activity.type === 'settings' ? 'text-orange-600' :
                          'text-gray-600'
                        }`} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.user}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Stats</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Server Uptime</span>
                    <span className="text-sm font-bold text-gray-900">99.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '99.8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Storage Used</span>
                    <span className="text-sm font-bold text-gray-900">68%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">CPU Usage</span>
                    <span className="text-sm font-bold text-gray-900">42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Memory</span>
                    <span className="text-sm font-bold text-gray-900">56%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{ width: '56%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
                  View Detailed Stats
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;