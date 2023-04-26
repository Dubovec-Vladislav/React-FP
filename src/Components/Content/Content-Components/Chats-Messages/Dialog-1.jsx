import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'

function Dialog1(props) {
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

    let newMessage = React.createRef();

    let addPost = () => {
        alert(newMessage.current.value);
    };

    return (
        <div className="social__block">
            <Chats chatsList={props.chatsList} />
            <div className="meassages__block">
                <textarea name="" cols="30" rows="10" ref={newMessage}></textarea>
                <button style={{ marginBottom: 20 + "px" }} onClick={addPost}>Button</button>
                <div class="meassages__content">
                    {messagesItems}
                </div>
                <div className="message__back"><NavLink to="/chats" className="back__link"><p>Back</p></NavLink></div>
            </div>
        </div>
    );
};

export default Dialog1;