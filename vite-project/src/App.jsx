import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/landing.jsx';
import Login from './Pages/login.jsx';
import SignupPage from './Pages/signup.jsx';
import AdminDashboard from './Admin/dashboard.jsx';
import ManagerDashboard from './Manager/dashboard.jsx';
import EmployeeDashboard from './Employee/dashboard.jsx';
import CustomerDashboard from './Customer/dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
        <Route path="/customer/dashboard" element={<CustomerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
