import React from 'react'
// import './React.css'
import { addLinkActionCreator, updateNewLinkActionCreator } from '../../../../redux/header-reducer'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'
import Dialog1 from './Dialog-1'
import StoreContext from '../../../../StoreContext';

function Dialog1Container() {
    return <StoreContext.Consumer>
        {
            (store) => {

                let onLinkAreaChange = (newHeaderLink) => {
                    store.dispatch(updateNewLinkActionCreator(newHeaderLink));
                }; // Update link area when typing message

                let addLink = () => {
                    store.dispatch(addLinkActionCreator());
                }; // Adding a link on button click

                let onMessageAreaChange = (newMessage) => {
                    store.dispatch(updateNewMessageActionCreator(newMessage));
                }; // Update message area when typing message

                let addMessage = () => {
                    store.dispatch(addMessageActionCreator(0));
                }; // Adding a message on button click

                let state = store.getState();

                return <Dialog1 updateNewLink={onLinkAreaChange} addLink={addLink}
                    updateNewMessage={onMessageAreaChange} addMessage={addMessage}
                    chatsList={state.dialogsPage.chatsList} messagesList={state.dialogsPage.allMessagesList[0]}
                    newLink={state.headerPage.newLink} newMessage={state.dialogsPage.newMessage} />
            }
        }
    </StoreContext.Consumer >
};

export default Dialog1Container;