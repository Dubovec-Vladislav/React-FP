import React from 'react'
// import './React.css'
import { addFriendActionCreator, delFriendActionCreator, setUsersActionCreator } from '../../../../redux/find-user-reducer';
import FindUsers from './FindUsers';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        usersList: state.usersPage.usersList,
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
        }
    };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;