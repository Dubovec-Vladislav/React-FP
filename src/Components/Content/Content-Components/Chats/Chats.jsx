import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"

function Chats(props) {
    let chatsItems = props.chatsList.map(chat => {
        return (
            <li key={chat.id} className="chats__item">
                <NavLink to={"/chats/" + chat.chatId} className="chats__link">{chat.chatName}</NavLink>
            </li>
        );
    });

    return (
        <div className="chats__block">
            <ul className="chats__list">
                {chatsItems}
            </ul>
        </div >
    );
};

export default Chats;