import React from 'react'
// import './React.css'

function DialogItem({ message }) {
  return (
    <div className="messages__item">
      <div className={message.messageTitle === "Вы" ? "messages__message messages__message_you" : "messages__message"}  >
        <div className="message__title">{message.messageTitle}</div>
        <div className="message__content">{message.messageText}</div>
      </div>
    </div>
  );
};

export default DialogItem;