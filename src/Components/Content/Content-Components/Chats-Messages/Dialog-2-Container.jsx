import React from 'react'
// import './React.css'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'
import Dialog2 from './Dialog-2';

function Dialog2Container(props) {

    let onMessageAreaChange = (newMessage) => {
        props.dispatch(updateNewMessageActionCreator(newMessage));
    }; // Update message area when typing message

    let addMessage = () => {
        props.dispatch(addMessageActionCreator(1));
    }; // Adding a message on button click

    return (
        <Dialog2 updateNewMessage={onMessageAreaChange} addMessage={addMessage}
            chatsList={props.chatsList} messagesList={props.messagesList} newLink={props.newLink} newMessage={props.newMessage} />
    );
};

export default Dialog2Container;