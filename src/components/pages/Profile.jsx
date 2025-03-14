import React from 'react';
import './Profile.css'; // Make sure you have a separate CSS file for styling

const Profile = () => {
  return (
    <div className="random-profile-container">
      <div className="random-profile">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg" 
          alt="Profile"
          className="profile-image"
        />
        <h2>John Doe</h2>
        <p><strong>Job Title:</strong> Software Engineer</p>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <p><strong>Bio:</strong> Passionate about building innovative solutions using technology. Enjoys problem-solving and continuous learning.</p>
      </div>
    </div>
  );
};

export default Profile;
