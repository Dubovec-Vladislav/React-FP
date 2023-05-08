import React from 'react'
// import './React.css'
import { addFriendActionCreator, delFriendActionCreator, setUsersActionCreator, updateCurrentPageActionCreator } from '../../../../redux/find-user-reducer';
import FindUsers from './FindUsers'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        addFriend: (userId) => {
            dispatch(addFriendActionCreator(userId));
        },
        delFriend: (userId) => {
            dispatch(delFriendActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(updateCurrentPageActionCreator(currentPage));
        },
    };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;