import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// // eslint-disable-next-line no-unused-vars
// const res = someValue;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3001/auth/login', {
        username,
        password,
      });
  
      if (res.status === 200 && res.data.success) {
        // Handle successful login
        // For example, store the token in local storage
        localStorage.setItem('token', res.data.token);
  
        // Navigate to the dashboard page
        navigate('/dashboard');
      } else {
        // Handle unsuccessful login
        // For example, display an error message to the user
        alert('Invalid username or password');
      }
    } catch (error) {
      // Handle API errors
      // For example, display an error message to the user
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
