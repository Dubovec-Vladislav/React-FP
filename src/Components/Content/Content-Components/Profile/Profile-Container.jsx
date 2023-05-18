import React from 'react'
// import './React.css'
import {
    getUserProfile, setUserProfile, toggleIsFetching,
    getUserStatus, setUserStatus, updateUserStatus,
} from '../../../../redux/profile-reducer'
import Preloader from '../../../../common/preloaders/Preloader'
import Profile from './Profile'
import { connect } from 'react-redux'


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.urlParams.userId)
        // setTimeout(() => {
        //     this.props.getUserStatus(this.props.urlParams.userId)
        // }, 1000);
        this.props.getUserStatus(this.props.urlParams.userId)
    };

    render() {
        return <>
            {this.props.isFetching
                ?
                <Preloader />
                :
                <Profile {...this.props} />
            }
        </>
    };
};

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    };
};

export default connect(mapStateToProps,
    {
        getUserProfile, setUserProfile, toggleIsFetching,
        getUserStatus, setUserStatus, updateUserStatus,
    }
)(ProfileContainer);