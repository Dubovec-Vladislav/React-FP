import React from 'react'
import axios from 'axios'
import FindUsers from './FindUsers';
// import './React.css'

class FindUsersApiContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            if (response.data.totalCount < 100) {
                this.props.setTotalUsersCount(response.data.totalCount);
            } else {
                this.props.setTotalUsersCount(100);
            }
        });
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };

    render() {
        return <FindUsers totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
            currentPage={this.props.currentPage} usersList={this.props.usersList}
            onPageChanged={this.onPageChanged} delFriend={this.props.delFriend} addFriend={this.props.addFriend} />;
    };
};

export default FindUsersApiContainer;