import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'

function Dialog1(props) {
    let messagesItems = props.dialogsPage.allMessagesList[0].map(message => {
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

    let newHeaderLink = React.createRef();
    let newMessage = React.createRef();

    function onLinkAreaChange() {
        props.updateNewLink(newHeaderLink.current.value)
    }; // Update link area when typing message

    function onAddLink() {
        if (newHeaderLink.current.value !== '') {
            props.addLink();
        }
    }; // Adding a link on button click

    function onMessageAreaChange() {
        props.updateNewMessage(newMessage.current.value);
    }; // Update message area when typing message

    function onAddMessage() {
        if (newMessage.current.value !== '') {
            props.addMessage(0);
        }
    }; // Adding a message on button click

    return (
        <div className="social__block">
            <Chats chatsList={props.dialogsPage.chatsList} />
            <div className="meassages__block">
                <textarea className="" rows="5" ref={newHeaderLink} onChange={onLinkAreaChange} value={props.newLink} style={{ padding: 10 + "px" }}></textarea>
                <button onClick={onAddLink} style={{ marginBottom: 20 + "px" }}>Button</button>
                <textarea className="" rows="5" ref={newMessage} onChange={onMessageAreaChange} value={props.dialogsPage.newMessage} style={{ padding: 10 + "px" }} placeholder='New message'></textarea>
                <button onClick={onAddMessage} style={{ marginBottom: 20 + "px" }}>Button</button>
                <div className="meassages__content">
                    {messagesItems}
                </div>
                <div className="message__back"><NavLink to="/chats" className="back__link"><p>Back</p></NavLink></div>
            </div>
        </div>
    );
};

export default Dialog1;