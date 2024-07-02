import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Scoring App. All rights reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <br></br>
        <a href="#">Twitter</a>
        <br></br>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
