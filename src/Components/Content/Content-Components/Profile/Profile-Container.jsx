import React from 'react'
// import './React.css'
import { setUserProfile, toggleIsFetching, getUserProfile, } from '../../../../redux/profile-reducer'
import Preloader from '../../../../common/preloaders/Preloader'
import Profile from './Profile'
import { connect } from 'react-redux'


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.getUserProfile(this.props.urlParams.userId)
    };

    render() {
        return <>
            {this.props.isFetching
                ?
                <Preloader />
                :
                <Profile {...this.props} profile={this.props.profile} />
            }
        </>
    };
};

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
    };
};

export default connect(mapStateToProps,
    { setUserProfile, toggleIsFetching, getUserProfile, }
)(ProfileContainer);