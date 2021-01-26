import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/cs" exact>CREATE CASE STUDY</NavLink>
    </li>
    <li>
      <NavLink to="/view">VIEW CASE STUDY</NavLink>
    </li>
    <li>
      <NavLink to="/">EDIT CASE STUDY</NavLink>
    </li>
    <li>
      <NavLink to="/login">AUTHENTICATE</NavLink>
    </li>
  </ul>
};

export default NavLinks;