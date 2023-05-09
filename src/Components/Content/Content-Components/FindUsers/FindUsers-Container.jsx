import React from 'react'
// import './React.css'
import axios from 'axios'
import FindUsers from './FindUsers'
import {
    addFriend, delFriend, setUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching,
} from '../../../../redux/find-user-reducer'
import { connect } from 'react-redux'
import Preloader from '../../../../common/preloaders/Preloader'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            if (response.data.totalCount < 100) {
                this.props.setTotalUsersCount(response.data.totalCount);
            } else {
                this.props.setTotalUsersCount(100);
            }
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
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
    };
};

const FindUsersContainer = connect(mapStateToProps,
    { addFriend, delFriend, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, }
)(UsersContainer);

// addFriend: (userId) => dispatch(addFriendActionCreator(userId)), --> addFriend: addFriend --> addFriend

export default FindUsersContainer;