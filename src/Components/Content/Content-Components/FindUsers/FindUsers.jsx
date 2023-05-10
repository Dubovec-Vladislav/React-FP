import React from 'react'
// import './React.css'
import userPhoto from '../../../../assets/img/user.png'
import { NavLink } from "react-router-dom"

function FindUsers(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = []

    for (let index = 1; index <= pagesCount; index++) {
        pages.push(index);
    }

    let pagesItems = pages.map(page => {
        return (
            <div key={page} className={page === props.currentPage ? "pagination__item pagination__item_active" : "pagination__item"}
                onClick={(event) => props.onPageChanged(page)}>{page}</div>
        );
    });

    let usersItems = props.usersList.map(user => {
        return (
            <li key={user.id} className="users__item">
                <div className="users__item-profile">
                    <div className="users__item-avatar">
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} alt="userPhoto" />
                        </NavLink>
                    </div>
                    <div className="users__item-subscribe">
                        {user.followed === true
                            ?
                            <button className="users__item-btn" onClick={() => props.delFriend(user.id)}>Unsubscribe</button>
                            :
                            <button className="users__item-btn" onClick={() => props.addFriend(user.id)}>Subscribe</button>
                        }
                    </div>
                </div>
                <div className="users__item-description">
                    <div className="users__item-left">
                        <div className="users__item-name">{user.name}</div>
                        <div className="users__item-status">{user.status}</div>
                    </div>
                    <div className="users__item-right">
                        <div className="users__item-country">{user.country}</div>
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
                {/* <button className="users__btn btn" onClick={props.onPageChanged}>Get Users</button> */}
                <ul className="users__list">
                    {usersItems}
                </ul>
            </div>
        </div>
    );
};

export default FindUsers;