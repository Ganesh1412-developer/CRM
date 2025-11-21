import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landing.jsx';
import Login from './Pages/login.jsx';
import SignupPage from './Pages/signup.jsx';
import AdminDashboard from './Admin/dashboard.jsx';
import ManagerDashboard from './Manager/dashboard.jsx';
import EmployeeDashboard from './Employee/dashboard.jsx';
import CustomerDashboard from './Customer/dashboard.jsx';
import AdminLeads from './Admin/adminlead.jsx';
import User from './Admin/user.jsx';
import AdminReport from './Admin/report.jsx';
import AdminSettings from './Admin/setting.jsx';
import AdminCommunication from './Admin/Communication.jsx';
import ManagerTeamManagement from './Manager/teammanagement.jsx';
import Performance from './Manager/Performance.jsx';
import Managerreports from './Manager/Report.jsx';
import Project from './Manager/project.jsx';
import ManagerApproval from './Manager/approval.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/report" element={<AdminReport />} />
        <Route path="/admin/leads" element={<AdminLeads />} />
        <Route path="/admin/user" element={<User />} />
        <Route path="/admin/communication" element={<AdminCommunication />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/team" element={<ManagerTeamManagement />} />
        <Route path="/manager/performance" element={<Performance />} />
        <Route path="/manager/reports" element={<Managerreports />} />
        <Route path="/manager/project" element={<Project />} />
        <Route path="/manager/approvals" element={<ManagerApproval />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
