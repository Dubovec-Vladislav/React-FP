import React from 'react'
// import './React.css'
import { NavLink } from 'react-router-dom';

function ChatItem({ chat }) {
    return (
        <li className="chats__item">
            <NavLink to={"/chats/" + chat.chatId} className="chats__link">{chat.chatName}</NavLink>
        </li>
    );
};

export default ChatItem;