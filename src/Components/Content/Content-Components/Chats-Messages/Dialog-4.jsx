import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'

function Dialog4(props) {
    let messagesItems = props.messagesList.map(message => {
        if (message.messageTitle === "Вы") {
            return (
                <div className="meassages__item">
                    <div className="meassages__message meassages__message_you">
                        <div className="message__title">{message.messageTitle}</div>
                        <div className="message__content">{message.messageText}</div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="meassages__item">
                    <div className="meassages__message">
                        <div className="message__title">{message.messageTitle}</div>
                        <div className="message__content">{message.messageText}</div>
                    </div>
                </div>
            );
        }
    });

    return (
        <div className="social__block">
            <Chats chatsList={props.chatsList}/>
            <div className="meassages__block">
                <div class="meassages__content">
                    {messagesItems}
                </div>
                <NavLink to="/chats" className="back__link"><p>Back</p></NavLink>
            </div>
        </div>
    );
};

export default Dialog4;