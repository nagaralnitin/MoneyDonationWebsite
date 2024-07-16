import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>Zero Hunger</h2>
      </div>
      <div>
        <a href="#home">Home</a>
        <a href="#donate">Donate</a>
        <a href="#contact">Contact</a>
        <a href="#ngos">NGOs</a>
      </div>
    </div>
  );
}

export default Navbar;
