import React from 'react';
import './NavBar.css';

const links = [
  { href: "#/", text: "Home" },
  { href: "#/projects", text: "Projects" },
  { href: "#/about", text: "About" },
];

const NavigationLinks = () => (
  <div className="navigation-links">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="nav-link"
      >
        {link.text}
      </a>
    ))}
  </div>
);

export default NavigationLinks;
