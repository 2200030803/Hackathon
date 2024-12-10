import React, { useState } from 'react';

const AdminLogin = ({ onAdminLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Example login validation logic
    if (username === 'admin' && password === 'password') {
      onAdminLogin(); // Call the function passed as a prop to handle login
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
