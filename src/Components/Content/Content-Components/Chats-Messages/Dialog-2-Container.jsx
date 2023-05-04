import React from 'react'
// import './React.css'
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../../../redux/dialogs-reducer'
import Dialog2 from './Dialog-2'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        // allMessagesList: state.dialogsPage.allMessagesList,
        // chatsList: state.dialogsPage.chatsList,
        // newMessage: state.dialogsPage.newMessage,
        dialogsPage: state.dialogsPage,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        updateNewMessage: (newMessage) => {
            dispatch(updateNewMessageActionCreator(newMessage));
        }, // Update message area when typing message
        addMessage: () => {
            dispatch(addMessageActionCreator(1));
        }, // Adding a message on button click
    };
};

const Dialog2Container = connect(mapStateToProps, mapDispatchToProps)(Dialog2); // Around Dialog1 create container component (f1 and f2 - future props)

export default Dialog2Container;