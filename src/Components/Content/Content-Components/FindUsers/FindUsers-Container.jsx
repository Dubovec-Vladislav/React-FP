import React from 'react'
// import './React.css'
import axios from 'axios'
import FindUsers from './FindUsers'
import {
    addFriendActionCreator, delFriendActionCreator, setUsersActionCreator,
    updateCurrentPageActionCreator, setTotalUsersCountActionCreator,
    toggleIsFetchingActionCreator,
} from '../../../../redux/find-user-reducer'
import { connect } from 'react-redux'
import preloader from '../../../../assets/loaders/loader_3.svg'

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
                <div className="preloader__block">
                    <img src={preloader} className="preloader" alt="preloader" />
                </div>
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

function mapDispatchToProps(dispatch) {
    return {
        addFriend: (userId) => { dispatch(addFriendActionCreator(userId)) },
        delFriend: (userId) => { dispatch(delFriendActionCreator(userId)) },
        setUsers: (users) => { dispatch(setUsersActionCreator(users)) },
        setCurrentPage: (currentPage) => { dispatch(updateCurrentPageActionCreator(currentPage)) },
        setTotalUsersCount: (totalUsersCount) => { dispatch(setTotalUsersCountActionCreator(totalUsersCount)) },
        toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingActionCreator(isFetching)) },
    };
};

const FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

export default FindUsersContainer;