import React from 'react'
import logo from '../../logo.svg';
// import './React.css'

function Header(props) {
    return (
        <div className="header__block">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            Header
        </div>
    );
};

export default Header;