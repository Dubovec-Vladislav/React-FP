import React from 'react'
// import './React.css'
import FindUsers from './FindUsers'
import {
  addFriend, delFriend, setCurrentPage,
  toggleIsFollowingProgress, getUsers,
  follow, unfollow,
} from '../../../../redux/find-user-reducer'
import { connect } from 'react-redux'
import Preloader from '../../../../common/preloaders/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize);
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
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


export default connect(mapStateToProps,
  {
    addFriend, delFriend, setCurrentPage,
    toggleIsFollowingProgress, getUsers,
    follow, unfollow,
  }
)(UsersContainer);

// addFriend: (userId) => dispatch(addFriendActionCreator(userId)), --> addFriend: addFriend --> addFriend