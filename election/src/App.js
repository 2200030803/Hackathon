// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AdminLogin from './Admin/AdminLogin';
import AdminHome from './Admin/AdminHome';
import Candidates from './Admin/Candidates';
import Voters from './Admin/voters';
import Votes from './Admin/votes';
import Results from './Admin/Results';
import AdminFormsPage from './Admin/AdminFormsPage';
import CampaignRallyDetails from './Admin/CampaignRallyDetails';
import DetailsOfActivity from './Admin/DetailsOfActivity';
import Report from './Admin/Report';
import MalpracticeReport from './Admin/MalpracticeReport';
import InactiveVoterReport from './Admin/InactiveVoterReport';
import ActivityReport from './Admin/ActivityReport';
import Voting from './Admin/Voting'; // Import the Voting component

function App() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Admin Login Handler
  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Login Route */}
        <Route
          path="/AdminLogin"
          element={<AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Admin Home Route */}
        <Route
          path="/AdminHome"
          element={isAdminLoggedIn ? <AdminHome /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Admin Modules */}
        <Route
          path="/candidates"
          element={isAdminLoggedIn ? <Candidates /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
        <Route
          path="/voters"
          element={isAdminLoggedIn ? <Voters /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
        <Route
          path="/votes"
          element={isAdminLoggedIn ? <Votes /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
        <Route
          path="/results"
          element={isAdminLoggedIn ? <Results /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Admin Forms Page */}
        <Route
          path="/admin/forms"
          element={isAdminLoggedIn ? <AdminFormsPage /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Campaign Rally Details */}
        <Route
          path="/campaign-rally-details"
          element={isAdminLoggedIn ? <CampaignRallyDetails /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Details of Activity */}
        <Route
          path="/details-of-activity"
          element={isAdminLoggedIn ? <DetailsOfActivity /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Reports Page and Submodules */}
        <Route
          path="/admin/reports"
          element={isAdminLoggedIn ? <Report /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
        <Route
          path="/admin/reports/malpractice"
          element={isAdminLoggedIn ? <MalpracticeReport /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
        <Route
          path="/admin/reports/inactive-voter"
          element={isAdminLoggedIn ? <InactiveVoterReport /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
        <Route
          path="/admin/reports/activity"
          element={isAdminLoggedIn ? <ActivityReport /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />

        {/* Add Online Voting Route */}
        <Route
          path="/admin/voting"
          element={isAdminLoggedIn ? <Voting /> : <AdminLogin onAdminLogin={handleAdminLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
