// Profile.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('https://grcportal-1.onrender.com/profile');
        setUser(response.data.user);
      } catch (error) {
        console.error('Profile error:', error.response.data.message);
        // Handle profile error
      }
    };

    fetchProfile();
  }, []);

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
