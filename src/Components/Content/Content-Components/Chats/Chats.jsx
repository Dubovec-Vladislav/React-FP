import React from 'react'
// import './React.css'
import ChatItem from './ChatItem'

function Chats(props) {
  return (
    <div className="chats__block">
      <ul className="chats__list">
        {props.chatsList.length ?
          props.chatsList.map(chat => <ChatItem chat={chat} key={chat.id} />)
          :
          <p>No chats</p>
        }
      </ul>
    </div >
  );
};

export default Chats;