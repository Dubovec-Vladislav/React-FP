import React from 'react'
// import './React.css'
import Header from './Header'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        headerLinksList: state.headerPage.headerLinksList,
    };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;