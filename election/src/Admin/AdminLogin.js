import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

export default function AdminLogin({ onAdminLogin }) {
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const location = useLocation();
  const activeLogin = location.pathname;

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Username: ", data.username);
      console.log("Password: ", data.password);
      
      const response = await axios.post('http://localhost:3080/adminlogin', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log(response.data);
      if (response.data === "Login Successful") {
        onAdminLogin();  // This should now work because onAdminLogin is a function
        localStorage.setItem('admin', JSON.stringify(data));
        navigate("/AdminHome");
      } else {
        setMessage("Incorrect Username or password");
        setError("");
      }
    } catch (error) {
      setMessage("");
      setError(error.message);
    }
  };

  return (
    <div className="login-page">
      <section className="login-section">
        <div className="login-content">
          <h4 align="center" style={{ color: "red" }}>
            {message || error}
          </h4>

          <div className="toggle-buttons">
            <Link to="/candidates" className={`toggle-button candidates ${activeLogin === '/candidates' ? 'active' : ''}`}>Candidates</Link>
            <Link to="/voters" className={`toggle-button voters ${activeLogin === '/voters' ? 'active' : ''}`}>Voters</Link>
            <Link to="/votes" className={`toggle-button votes ${activeLogin === '/votes' ? 'active' : ''}`}>Votes</Link>
            <Link to="/results" className={`toggle-button results ${activeLogin === '/results' ? 'active' : ''}`}>Results</Link>
            <div className="toggle-selector"></div>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Username</label>
              <input type="text" id="username" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" id="password" onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-button">Login</button>
          </form>

          <div className="additional-links">
            <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            <Link to="/signup" className="signup-link">Signup</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
