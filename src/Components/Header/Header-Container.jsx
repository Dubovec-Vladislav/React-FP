import React from 'react'
// import './React.css'
import Header from './Header'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        headerLinksList: state.headerPage.headerLinksList,
    };
};

function mapDispatchToProps(dispatch) { };

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;