import React from 'react'
// import './React.css'
import { addLink, updateNewLink } from '../../../../redux/header-reducer'
import { addMessage, updateNewMessage } from '../../../../redux/dialogs-reducer'
import Dialog1 from './Dialog-1'
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage,
        newLink: state.headerPage.newLink,
    };
};

const Dialog1Container = connect(mapStateToProps, {
    addLink, updateNewLink, updateNewMessage, addMessage
})(Dialog1);

export default Dialog1Container;