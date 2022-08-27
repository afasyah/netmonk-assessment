import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => (
   <nav className="navbar__header">
      <ul className="navbar__header-list">
         <li className="navbar__header-logo">
            <Link to="/">
               <img src="/images/logo.png" alt="Logo" width={42} />
               <span>SHUSSY!</span>
            </Link>
         </li>
         <li className="navbar__header-menu">
            <Link to="/" className="navbar__header-item">
               Home
            </Link>
            <Link to="/booking" className="navbar__header-item">
               Booking List
            </Link>
         </li>
      </ul>
   </nav>
);

export default Navbar;
