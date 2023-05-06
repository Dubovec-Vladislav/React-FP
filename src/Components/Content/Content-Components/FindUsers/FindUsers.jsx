import React from 'react'
import axios from 'axios'
import userPhoto from '../../../../assets/img/user.png'
// import './React.css'

function FindUsers(props) {
    if (props.usersList.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            // debugger;
            props.setUsers(response.data.items);
        });

        // props.setUsers(
        //     [
        //         { id: 1, name: "Dmitry", status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", country: "USA", city: "New-York", followed: false },
        //         { id: 2, name: "Alex", status: "Phasellus et tristique massa", country: "Italia", city: "Rome", followed: true },
        //         { id: 3, name: "Jo", status: "Duis posuere urna ut ligula egestas vehicula", country: "Spanish", city: "Madrid", followed: false },
        //         { id: 4, name: "Rex", status: "Vestibulum vel auctor elit", country: "Mexico", city: "Mexico", followed: false },
        //     ]
        // )
    };
    let usersItems = props.usersList.map(user => {
        return (
            <li key={user.id} className="users__item">
                <div className="users__item-profile">
                    <div className="users__item-avatar"><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="userPhoto" /></div>
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
                <ul className="users__list">
                    {usersItems}
                </ul>
            </div>
        </div>
    );
};

export default FindUsers;