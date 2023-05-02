import React from 'react'
// import './React.css'
import { addLinkActionCreator, updateNewLinkActionCreator } from '../../../../redux/header-reducer'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'
import Dialog1 from './Dialog-1'

function Dialog1Container(props) {

    let onLinkAreaChange = (newHeaderLink) => {
        props.dispatch(updateNewLinkActionCreator(newHeaderLink));
    }; // Update link area when typing message

    let addLink = () => {
        props.dispatch(addLinkActionCreator());
    }; // Adding a link on button click

    let onMessageAreaChange = (newMessage) => {
        props.dispatch(updateNewMessageActionCreator(newMessage));
    }; // Update message area when typing message

    let addMessage = () => {
        props.dispatch(addMessageActionCreator(0));
    }; // Adding a message on button click

    return (
        <Dialog1 updateNewLink={onLinkAreaChange} addLink={addLink} updateNewMessage={onMessageAreaChange} addMessage={addMessage}
            chatsList={props.chatsList} messagesList={props.messagesList} newLink={props.newLink} newMessage={props.newMessage} />
    );
};

export default Dialog1Container;