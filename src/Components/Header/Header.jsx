import React from 'react'
import logo from '../../logo.svg'
// import './React.css'
import { NavLink } from "react-router-dom"

function Header(props) {
    let headerLinks = [
        { id: 0, path: "/", title: "Content1" },
        { id: 1, path: "/2", title: "Content2" },
        { id: 2, path: "/3", title: "Content3" },
        { id: 3, path: "/4", title: "Content4" },
        { id: 4, path: "/chats", title: "Chats" },
    ];

    let headerItems = headerLinks.map(link => {
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