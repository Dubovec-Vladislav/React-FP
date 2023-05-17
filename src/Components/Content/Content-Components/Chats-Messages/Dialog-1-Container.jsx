import React from 'react'
// import './React.css'
import { addLink, updateNewLink } from '../../../../redux/header-reducer'
import { addMessage, updateNewMessage } from '../../../../redux/dialogs-reducer'
import Dialog1 from './Dialog-1'
import { connect } from 'react-redux';
import withAuthRedirect from '../../../../hoc/withAuthRedirect'
import { compose } from 'redux';

function mapStateToProps(state) {
    return {
        dialogsPage: state.dialogsPage,
        newLink: state.headerPage.newLink,
    };
};

// let AuthRedirectComponent = withAuthRedirect(Dialog1);

export default compose(
    connect(mapStateToProps, { addLink, updateNewLink, updateNewMessage, addMessage }),
    withAuthRedirect,
)(Dialog1);