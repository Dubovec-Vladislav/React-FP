import React from 'react'
import logo from '../../logo.svg'
// import './React.css'
import { NavLink } from "react-router-dom"


function Header(props) {
    let headerItems = props.headerLinksList.map(link => {
        return (
            <li className="header__item">
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
        </div >
    );
};

export default Header;