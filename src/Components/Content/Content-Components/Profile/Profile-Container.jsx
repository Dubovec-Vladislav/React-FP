import React, { useEffect } from 'react'
// import './React.css'
import { useParams } from 'react-router-dom';
import {
    getUserProfile, setUserProfile, toggleIsFetching,
    getUserStatus, setUserStatus, updateUserStatus,
} from '../../../../redux/profile-reducer'
import Preloader from '../../../../common/preloaders/Preloader'
import Profile from './Profile'
import { connect } from 'react-redux'

function ProfileContainer(props) {
    const { getUserProfile, getUserStatus } = props;
    const urlParams = useParams();

    useEffect(() => {
        getUserProfile(urlParams.userId);
        getUserStatus(urlParams.userId);
    }, [getUserProfile, getUserStatus, urlParams.userId]);

    return <>{props.isFetching ? <Preloader /> : <Profile {...props} />}</>
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