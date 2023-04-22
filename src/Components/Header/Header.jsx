import React from 'react'
import logo from '../../logo.svg'
// import './React.css'

function Header(props) {
    return (
        <div className="header__block">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <nav class="header__menu">
                <ul class="header__list">
                    <li class="header__item">
                        <a href="/" class="header__link">Content1</a>
                    </li>
                    <li class="header__item">
                        <a href="2" class="header__link">Content2</a>
                    </li>
                    <li class="header__item">
                        <a href="3" class="header__link">Content3</a>
                    </li>
                    <li class="header__item">
                        <a href="4" class="header__link">Content4</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;