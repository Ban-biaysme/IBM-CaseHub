import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li> <h2 className="line-sep"> | </h2>
    </li>
    <li>
      <NavLink to="/case-study" exact>CREATE CASE STUDY</NavLink>
    </li>
    <li>
      <NavLink to="/cases">VIEW ALL</NavLink>
    </li>
    <li>
      <NavLink to="/export">EXPORT</NavLink>
    </li>
    {/*<li>*/}
    {/*  <NavLink to="/">DELETE</NavLink>*/}
    {/*</li>*/}
  </ul>
};

export default NavLinks;
