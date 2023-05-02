import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'

function Dialog2(props) {
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

    let onMessageAreaChange = () => {
        props.dispatch(updateNewMessageActionCreator(newMessage.current.value));
    }; // Update message area when typing message

    let addMessage = () => {
        if (newMessage.current.value !== '') {
            props.dispatch(addMessageActionCreator(1));
        }
    }; // Adding a message on button click

    return (
        <div className="social__block">
            <Chats chatsList={props.chatsList} />
            <div className="meassages__block">
                <textarea className="" rows="5" ref={newMessage} onChange={onMessageAreaChange} value={props.newMessage} style={{ padding: 10 + "px" }} placeholder='New message'></textarea>
                <button onClick={addMessage} style={{ marginBottom: 20 + "px" }}>Button</button>
                <div class="meassages__content">
                    {messagesItems}
                </div>
                <NavLink to="/chats" className="back__link"><p>Back</p></NavLink>
            </div>
        </div>
    );
};

export default Dialog2;