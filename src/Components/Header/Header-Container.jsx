import React from 'react'
// import './React.css'
import axios from 'axios'
import { setAuthUserData, } from '../../redux/auth-reducer'
import Header from './Header'
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                this.props.setAuthUserData(id, login, email);
            }
        });
    };

    render() {
        return <Header {...this.props} />
    };
};

function mapStateToProps(state) {
    return {
        headerLinksList: state.headerPage.headerLinksList,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);