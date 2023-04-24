import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"

function Chats(props) {
    let chats = [
        { id: 0, chatId: "1", chatName: "Дмитрий" },
        { id: 1, chatId: "2", chatName: "Александр" },
        { id: 2, chatId: "3", chatName: "Григорий" },
        { id: 3, chatId: "4", chatName: "Вячеслав" },
    ]

    let chatsItems = chats.map(chat => {
        return (
            <li className="chats__item">
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