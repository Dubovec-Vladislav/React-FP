import React from 'react'
// import './React.css'
import FindUsers from './FindUsers'
import {
    addFriend, delFriend, setUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleIsFollowingProgress,
} from '../../../../redux/find-user-reducer'
import { connect } from 'react-redux'
import Preloader from '../../../../common/preloaders/Preloader'
import { usersApi } from '../../../../api/api'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            if (data.totalCount > 100) {
                this.props.setTotalUsersCount(100);
            }
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    };

    render() {
        return <>
            {this.props.isFetching
                ?
                <Preloader />
                :
                <FindUsers totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    usersList={this.props.usersList}
                    onPageChanged={this.onPageChanged}
                    delFriend={this.props.delFriend}
                    addFriend={this.props.addFriend}
                    followingInProgress={this.props.followingInProgress}
                    toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                />
            }
        </>
    };
};

function mapStateToProps(state) {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

// addFriend: (userId) => dispatch(addFriendActionCreator(userId)), --> addFriend: addFriend --> addFriend

export default connect(mapStateToProps,
    { addFriend, delFriend, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, }
)(UsersContainer);