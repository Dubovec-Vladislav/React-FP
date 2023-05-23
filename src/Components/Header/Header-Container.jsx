import React, { useEffect } from 'react'
// import './React.css'
import { setAuthUserData, authMe, } from '../../redux/auth-reducer'
import Header from './Header'
import { connect } from 'react-redux'

const HeaderContainer = ({ authMe, ...props }) => {
    useEffect(() => {
        authMe();
    }, [authMe]);

    return <Header {...props} />;
};

function mapStateToProps(state) {
    return {
        headerLinksList: state.headerPage.headerLinksList,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { setAuthUserData, authMe, })(HeaderContainer);