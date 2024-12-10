// src/Admin/AdminHome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHome.css';  // Ensure this CSS is in the same directory or adjust the path accordingly

const AdminHome = () => {
  return (
    <div className="admin-home">
      <h1>Welcome, Admin</h1>
      <div className="modules">
        <div className="module">
          <Link to="/candidates" className="module-link">Candidates</Link>
        </div>
        <div className="module">
          <Link to="/voters" className="module-link">Voters</Link>
        </div>
        <div className="module">
          <Link to="/votes" className="module-link">Votes</Link>
        </div>
        <div className="module">
          <Link to="/results" className="module-link">Results</Link>
        </div>
        <div className="module">
          <Link to="/admin/reports" className="module-link">Reports</Link> {/* Reports link */}
        </div>
        <div className="module">
          <Link to="/admin/voting" className="module-link">Online Voting</Link> {/* Voting link */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
