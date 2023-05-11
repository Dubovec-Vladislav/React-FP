import React from 'react'
// import './React.css'
import logo from '../../logo.svg'
import { NavLink } from "react-router-dom"


function Header(props) {
    let headerItems = props.headerLinksList.map(link => {
        return (
            <li key={link.id} className="header__item">
                <NavLink to={link.path} className="header__link">{link.title}</NavLink>
            </li>
        );
    });

    return (
        <div className="header__block">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <nav className="header__menu">
                <ul className="header__list">
                    {headerItems}
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