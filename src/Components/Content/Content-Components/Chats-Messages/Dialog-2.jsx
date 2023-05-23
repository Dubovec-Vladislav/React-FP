import React from 'react'
// import './React.css'
import Chats from '../Chats/Chats'
import DialogItem from './DialogItem'
import { NavLink } from "react-router-dom"

function Dialog2(props) {
  return (
    <div className="social__block">
      <Chats chatsList={props.dialogsPage.chatsList} />
      <div className="messages__block">

        <textarea onChange={(e) => props.updateNewMessage(e.target.value)} value={props.dialogsPage.newMessage} placeholder='New message' rows="5" ></textarea>
        <button onClick={props.dialogsPage.newMessage !== '' ? () => props.addMessage(1) : null} className="dialog__btn">Button</button>

        <div className="messages__content">
          {props.dialogsPage.allMessagesList[1].length ?
            props.dialogsPage.allMessagesList[1].map(message => <DialogItem message={message} key={message.id} />)
            :
            <p>No messages</p>
          }
        </div>
        <div className="message__back"><NavLink to="/chats" className="back__link"><p>Back</p></NavLink></div>
      </div>
    </div>
  );
};

export default Dialog2;