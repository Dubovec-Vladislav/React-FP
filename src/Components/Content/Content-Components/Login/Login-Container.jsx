import React from 'react'
// import './React.css'
import axios from 'axios'
import { setUserProfile, toggleIsFetching, } from '../../../../redux/profile-reducer'
import Preloader from '../../../../common/preloaders/Preloader'
import { connect } from 'react-redux'
import Login from './Login'


class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.urlParams.userId}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(response.data);
        });
    };

    render() {
        return <>
            {this.props.isFetching
                ?
                <Preloader />
                :
                <Login {...this.props} profile={this.props.profile} />
            }
        </>
    };
};

function mapStateToProps(state) {
    return {
        
    };
};

export default connect(mapStateToProps,
    { setUserProfile, toggleIsFetching, }
)(LoginContainer);