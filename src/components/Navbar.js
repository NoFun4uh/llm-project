
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const userProfile = {
    name: 'sidharth k',
    company: 'alphaware',
    profilePic: 'https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?rs=1&pid=ImgDetMain', 
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Not gini</div>
      <div className="nav-item">
        <a href="#home" className='nav1'>SCORING MODELS</a>
        <a href="#about" className='nav2'>SCORING HISTORY</a>
        <a href="#contact" className='nav3'>MONITORING</a>
      </div>
      <div className="profile" onClick={toggleProfile}>
        <img src={userProfile.profilePic} alt="Profile" className="profile-pic" />
        {isProfileOpen && (
          <div className="profile-info">
            <p>Name: {userProfile.name}</p>
            <p>Company: {userProfile.company}</p>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

