import React from 'react'
import axios from 'axios'
import userPhoto from '../../../../assets/img/user.png'
// import './React.css'

class FindUsers extends React.Component {
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
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []

        for (let index = 1; index <= pagesCount; index++) {
            pages.push(index);
        }

        let pagesItems = pages.map(page => {
            return (
                <div className={page === this.props.currentPage ? "pagination__item pagination__item_active" : "pagination__item"}
                    onClick={(event) => this.onPageChanged(page)}>{page}</div>
            );
        });

        let usersItems = this.props.usersList.map(user => {
            return (
                <li key={user.id} className="users__item">
                    <div className="users__item-profile">
                        <div className="users__item-avatar"><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="userPhoto" /></div>
                        <div className="users__item-subscribe">
                            {user.followed === true
                                ?
                                <button className="users__item-btn" onClick={() => this.props.delFriend(user.id)}>Unsubscribe</button>
                                :
                                <button className="users__item-btn" onClick={() => this.props.addFriend(user.id)}>Subscribe</button>
                            }
                        </div>
                    </div>
                    <div className="users__item-description">
                        <div className="users__item-left">
                            <div className="users__item-name">{user.name}</div>
                            <div className="users__item-status">{user.status}</div>
                        </div>
                        <div className="users__item-right">
                            <div className="users__item-country">{user.country},</div>
                            <div className="users__item-city">{user.city}</div>
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <div className="users__block">
                <div className="users__body">
                    <div className="pagination__block">
                        <div className="pagination__body">
                            {pagesItems}
                        </div>
                    </div>
                    <button className="users__btn btn" onClick={this.onPageChanged}>Get Users</button>
                    <ul className="users__list">
                        {usersItems}
                    </ul>
                </div>
            </div>
        );
    };
};

export default FindUsers;