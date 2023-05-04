import React from 'react'
// import './React.css'
import { addLinkActionCreator, updateNewLinkActionCreator } from '../../../../redux/header-reducer'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'
import Dialog1 from './Dialog-1'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        // allMessagesList: state.dialogsPage.allMessagesList,
        // chatsList: state.dialogsPage.chatsList,
        // newMessage: state.dialogsPage.newMessage,
        dialogsPage: state.dialogsPage,
        newLink: state.headerPage.newLink,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateNewLink: (newHeaderLink) => {
            dispatch(updateNewLinkActionCreator(newHeaderLink));
        }, // Update link area when typing message
        addLink: () => {
            dispatch(addLinkActionCreator());
        }, // Adding a link on button click
        updateNewMessage: (newMessage) => {
            dispatch(updateNewMessageActionCreator(newMessage));
        }, // Update message area when typing message
        addMessage: () => {
            dispatch(addMessageActionCreator(0));
        }, // Adding a message on button click
    };
};

const Dialog1Container = connect(mapStateToProps, mapDispatchToProps)(Dialog1); // Around Dialog1 create container component (f1 and f2 - future props)

export default Dialog1Container;