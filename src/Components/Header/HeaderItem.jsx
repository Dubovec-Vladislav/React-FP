import React from 'react'
// import './React.css'
import { NavLink } from 'react-router-dom';

function HeaderItem({ link }) {
  return (
    <li className="header__item">
      <NavLink to={link.path} className="header__link">{link.title}</NavLink>
    </li>
  );
};

export default HeaderItem;