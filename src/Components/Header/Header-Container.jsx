import React from 'react'
// import './React.css'
import { setAuthUserData, } from '../../redux/auth-reducer'
import Header from './Header'
import { connect } from 'react-redux';
import { authMe } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authMe().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
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