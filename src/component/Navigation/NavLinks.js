import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/case-study" exact>Create</NavLink>
    </li>
    <li>
      <NavLink to="/cases">View All</NavLink>
    </li>
    <li>
      <NavLink to="/">Your Case Studies</NavLink>
    </li>
  </ul>
};

export default NavLinks;