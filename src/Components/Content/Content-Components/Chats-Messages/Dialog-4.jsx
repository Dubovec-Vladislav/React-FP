import React from 'react'
// import './React.css'
import Chats from '../Chats/Chats'
import DialogItem from './DialogItem';
import { NavLink } from "react-router-dom"

function Dialog4(props) {
  return (
    <div className="social__block">
      <Chats chatsList={props.chatsList} />
      <div className="messages__block">
        <div className="messages__content">
          {props.messagesList.length ?
            props.messagesList.map(message => <DialogItem message={message} key={message.id} />)
            :
            <p>No messages</p>
          }
        </div>
        <NavLink to="/chats" className="back__link"><p>Back</p></NavLink>
      </div>
    </div>
  );
};

export default Dialog4;