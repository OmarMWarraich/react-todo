import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  return (
    <nav className="navBar">
      <ul>
        {/* eslint-disable-next-line arrow-body-style */}
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
