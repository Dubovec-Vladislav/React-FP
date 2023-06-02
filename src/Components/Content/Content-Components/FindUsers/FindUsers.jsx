import React from 'react'
// import './React.css'
// import userPhoto from '../../../../assets/img/user.png'
import UserItem from './UserItem';
import Paginator from './Paginator';

function FindUsers(props) {
  return (
    <div className="users__block">
      <div className="users__body">
        <div className="pagination__block">
          <div className="pagination__body">
            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
          </div>
        </div>
        <ul className="users__list">
          {props.usersList.length ?
            props.usersList.map(user => <UserItem user={user} followingInProgress={props.followingInProgress}
              unfollow={props.unfollow} follow={props.follow} key={user.id} />)
            :
            <p>No users</p>
          }
        </ul>
      </div>
    </div>
  );
};

export default FindUsers;