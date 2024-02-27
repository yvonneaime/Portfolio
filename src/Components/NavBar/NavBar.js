import React from 'react';
import './NavBar.css';
import NavigationLinks from './NavLinks.js';

const Name = "✮⋆ Yvonne Aime ⋆";

const NavBar = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-red-500 via-blue-500 to-purple-500 p-1" style={{ animation: 'gradientFlow 13s ease infinite', backgroundSize: '200% 200%' }}>
      <nav className="relative z-10 flex items-center justify-between px-6 py-4">
        <div className="logo-container">
          <a href="/" className="p-4 text-white text-2xl font-bold">
            <h1>{Name}</h1>
          </a>
        </div>
        <div className="flex p-4 items-center" >
          <NavigationLinks></NavigationLinks>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;