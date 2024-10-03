import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="myNav">
        <NavLink exact to="/" className="navLink" activeClassName="activeNavLink">
          Home
        </NavLink>
        <NavLink to="/about" className="navLink" activeClassName="activeNavLink">
          About
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
