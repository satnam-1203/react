// Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const naviagte = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://grcportal-1.onrender.com/profile', { withCredentials: true });
        setUser(response.data.user);
      } catch (error) {
        console.error('Profile error:', error.response.data.message);
        naviagte('/'); // Redirect to login page if not authenticated
      }
    };

    fetchProfile();
  }, [useNavigate]);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.username}</h2>
          <p>User ID: {user.id}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
