import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/case-study" exact>CREATE CASE STUDY</NavLink>
    </li>
    <li>
      <NavLink to="/cases">VIEW All</NavLink>
    </li>
    <li>
      <NavLink to="/userCases">MY CASES</NavLink>
    </li>
    <li>
      <NavLink to="/logout">LOGOUT</NavLink>
    </li>
    {/*<li>*/}
    {/*  <NavLink to="/">DELETE</NavLink>*/}
    {/*</li>*/}
  </ul>
};

export default NavLinks;
