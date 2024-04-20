// LoginForm.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook for redirection

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const naviagte = useNavigate(); // Initialize useHistory hook

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://test-api-66wh.onrender.com/login', { // Update server URL
        username,
        password
      });
      console.log(response.data);
      // Redirect to profile page upon successful login
      naviagte('/profile'); // Redirect to profile page
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleLogin}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
