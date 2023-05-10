import React from 'react'
// import './React.css'
import axios from 'axios'
import { setUserProfile, toggleIsFetching, } from '../../../../redux/profile-reducer'
import Preloader from '../../../../common/preloaders/Preloader'
import Profile from './Profile'
import { connect } from 'react-redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
                <Profile {...this.props} profile={this.props.profile}/>
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