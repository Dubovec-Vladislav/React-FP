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

    let newHeaderLink = React.createRef();

    let addLink = () => {
        props.addHeaderLink();
    }; // Adding a link on button click

    let onAreaChange = () => {
        props.updateNewLink(newHeaderLink.current.value);
    }; // Update field when typing message

    return (
        <div className="social__block">
            <Chats chatsList={props.chatsList} />
            <div className="meassages__block">
                <textarea className="" cols="30" rows="5" ref={newHeaderLink} onChange={onAreaChange} value={props.newLink} style={{ padding: 10 + "px" }}></textarea>
                <button onClick={addLink} style={{ marginBottom: 20 + "px" }}>Button</button>
                <div className="meassages__content">
                    {messagesItems}
                </div>
                <div className="message__back"><NavLink to="/chats" className="back__link"><p>Back</p></NavLink></div>
            </div>
        </div>
    );
};

export default Dialog1;