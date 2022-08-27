import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
   <nav className="navbar__header">
      <ul className="navbar__header-list">
         <li className="navbar__header-logo">🍣 SHUSSY!</li>
         <li className="navbar__header-menu">
            <Link to="/">Home</Link>
            <Link to="/booking">Booking List</Link>
         </li>
      </ul>
   </nav>
);

export default Navbar;
