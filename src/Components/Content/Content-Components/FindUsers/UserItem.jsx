import React from 'react'
// import './React.css'
import { NavLink } from 'react-router-dom';

function UserItem(props) {
  return (
    <li key={props.user.id} className="users__item">
      <div className="users__item-profile">
        <div className="users__item-avatar">
          <NavLink to={"/profile/" + props.user.id}>
            <img src={props.user.photos.small != null ? props.user.photos.small : "/user-astronaut.svg"} alt="userPhoto" />
          </NavLink>
        </div>
        <div className="users__item-subscribe">
          {props.user.followed === true
            ?
            <button className="users__btn btn" disabled={props.followingInProgress.some(id => props.user.id === id)}
              onClick={() => props.unfollow(props.user.id)}>Unsubscribe</button>
            :
            <button className="users__btn btn" disabled={props.followingInProgress.some(id => props.user.id === id)}
              onClick={() => props.follow(props.user.id)}>Subscribe</button>
          }
        </div>
      </div>
      <div className="users__item-description">
        <div className="users__item-left">
          <div className="users__item-name">{props.user.name}</div>
          <div className="users__item-status">{props.user.status}</div>
        </div>
        <div className="users__item-right">
          <div className="users__item-country">{props.user.country}</div>
          <div className="users__item-city">{props.user.city}</div>
        </div>
      </div>
    </li>
  );
};

export default UserItem;