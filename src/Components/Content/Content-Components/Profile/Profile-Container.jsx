import React from 'react'
// import './React.css'
import { setUserProfile, toggleIsFetching, } from '../../../../redux/profile-reducer'
import Preloader from '../../../../common/preloaders/Preloader'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfile } from '../../../../api/api'


class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        getUserProfile(this.props.urlParams.userId).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUserProfile(data);
        });
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
    { setUserProfile, toggleIsFetching, }
)(ProfileContainer);