import React from 'react'
// import './React.css'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'
import Dialog2 from './Dialog-2'
import StoreContext from '../../../../StoreContext'

function Dialog2Container() {
    return <StoreContext.Consumer>
        {
            (store) => {

                let onMessageAreaChange = (newMessage) => {
                    store.dispatch(updateNewMessageActionCreator(newMessage));
                }; // Update message area when typing message

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator(1));
                }; // Adding a message on button click

                let state = store.getState();

                return <Dialog2 updateNewMessage={onMessageAreaChange} addMessage={addMessage}
                    chatsList={state.dialogsPage.chatsList} messagesList={state.dialogsPage.allMessagesList[1]}
                    newMessage={state.dialogsPage.newMessage} />
            }
        }
    </StoreContext.Consumer>
};

export default Dialog2Container;