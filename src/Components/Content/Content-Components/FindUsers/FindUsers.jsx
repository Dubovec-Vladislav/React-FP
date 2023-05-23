import React from 'react'
// import './React.css'
// import userPhoto from '../../../../assets/img/user.png'
import { NavLink } from "react-router-dom"
import UserItem from './UserItem';

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

  return (
    <div className="users__block">
      <div className="users__body">
        <div className="pagination__block">
          <div className="pagination__body">
            {pagesItems}
          </div>
        </div>
        <ul className="users__list">
          {props.usersList.length ?
            props.usersList.map(user => <UserItem user={user} followingInProgress={props.followingInProgress}
              unfollow={props.unfollow} follow={props.follow} key={user.id}/>)
            :
            <p>No users</p>
          }
        </ul>
      </div>
    </div>
  );
};

export default FindUsers;