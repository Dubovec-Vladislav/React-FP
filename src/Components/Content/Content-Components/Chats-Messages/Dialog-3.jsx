import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'

function Dialog3(props) {
    let messagesItems = props.messagesList.map(message => {
        return (
            <div key={message.id} className="meassages__item">
                {message.messageTitle === "Вы"
                    ?
                    <div className="meassages__message meassages__message_you">
                        <div className="message__title">{message.messageTitle}</div>
                        <div className="message__content">{message.messageText}</div>
                    </div>
                    :
                    <div className="meassages__message">
                        <div className="message__title">{message.messageTitle}</div>
                        <div className="message__content">{message.messageText}</div>
                    </div>
                }
            </div>
        );
    });

    return (
        <div className="social__block">
            <Chats chatsList={props.chatsList} />
            <div className="meassages__block">
                <div className="meassages__content">
                    {messagesItems}
                </div>
                <NavLink to="/chats" className="back__link"><p>Back</p></NavLink>
            </div>
        </div>
    );
};

export default Dialog3;