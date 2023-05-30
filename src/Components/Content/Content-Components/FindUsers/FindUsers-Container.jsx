import React, { useEffect } from 'react'
// import './React.css'
import FindUsers from './FindUsers'
import {
  addFriend, delFriend, setCurrentPage,
  toggleIsFollowingProgress, getUsers,
  follow, unfollow,
} from '../../../../redux/find-user-reducer'
import { connect } from 'react-redux'
import Preloader from '../../../../common/preloaders/Preloader'

function UsersContainer(props) {
  useEffect(() => {
    props.getUsers(props.currentPage, props.pageSize);
  }, [props.getUsers]);
  
  const onPageChanged = (pageNumber) => {
    props.setCurrentPage(pageNumber)
    props.getUsers(pageNumber, props.pageSize);
  };

  return <>
    {props.isFetching
      ?
      <Preloader />
      :
      <FindUsers totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        usersList={props.usersList}
        onPageChanged={onPageChanged}
        delFriend={props.delFriend}
        addFriend={props.addFriend}
        followingInProgress={props.followingInProgress}
        toggleIsFollowingProgress={props.toggleIsFollowingProgress}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    }
  </>
}

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