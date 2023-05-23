import React from 'react'
// import './React.css'
import HeaderItems from './HeaderItem'
import { NavLink } from "react-router-dom"


function Header(props) {
  return (
    <div className="header__block">
      <div className="header__logo">
        <img src="/logo.svg" alt="logo" />
      </div>
      <nav className="header__menu">
        <ul className="header__list">
          {props.headerLinksList.length ?
            props.headerLinksList.map(link => <HeaderItems link={link} key={link.id} />)
            :
            <p>No links</p>
          }
        </ul>
      </nav>
      {props.isAuth
        ?
        <div className="login__hello">Hello, {props.login}</div>
        :
        <div className="login__hello">Please, <NavLink to="/login"> login</NavLink></div>
      }
    </div >
  );
};

export default Header;