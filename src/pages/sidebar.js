import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './Sidebarr.css'; // Ensure to create this CSS file

const Sidebarr = ({ isOpen, handleClose }) => {
  return (
    <div className={`sidebarr ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={handleClose}>×</button>
      <ul className="sidebarr-menu">
        <li><ScrollLink to="home" smooth={true} duration={500} onClick={handleClose}>Home</ScrollLink></li>
        <li><ScrollLink to="about-us" smooth={true} duration={500} onClick={handleClose}>About Us</ScrollLink></li>
        <li><ScrollLink to="services" smooth={true} duration={500} onClick={handleClose}>Services</ScrollLink></li>
        <li><ScrollLink to="clients" smooth={true} duration={500} onClick={handleClose}>Clients</ScrollLink></li>
        <li><ScrollLink to="why-choose-tridev" smooth={true} duration={500} onClick={handleClose}>Why Choose Us</ScrollLink></li>
      </ul>
    </div>
  );
};

export default Sidebarr;
