import React from 'react'
// import './React.css'

function FindUsers(props) {
    // let Subscribe = React.createRef();
    // let Unsubscribe = React.createRef();

    // function onSubscribeClick() {
    //     props.addFriend();
    // }

    // function onUnsubscribeClick() {
    //     props.delFriend();
    // }

    let usersItems = props.usersList.map(user => {
        return (
            <li key={user.id} className="users__item">
                <div className="users__item-profile">
                    <div className="users__item-avatar"></div>
                    <div className="users__item-subscribe">
                        {user.friendStatus === true ?
                            <button className="users__item-btn" onClick={() => props.delFriend(user.id)}>Unsubscribe</button> :
                            <button className="users__item-btn" onClick={() => props.addFriend(user.id)}>Subscribe</button>}
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