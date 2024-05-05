import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Dashboard from './components/Dashboard';
import DeviceManagement from './components/DeviceManagement';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Secure Account Dashboard</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/device-management" element={<DeviceManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
