import React from 'react'
// import './React.css'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { addLink, updateNewLink } from '../../../../redux/header-reducer'
import { addMessage, updateNewMessage } from '../../../../redux/dialogs-reducer'
import withAuthRedirect from '../../../../hoc/withAuthRedirect'
import Dialog1 from './Dialog-1'

function mapStateToProps(state) {
	return {
		dialogsPage: state.dialogsPage,
		newLink: state.headerPage.newLink,
	};
};

export default compose(
	connect(mapStateToProps, { addLink, updateNewLink, updateNewMessage, addMessage }),
	withAuthRedirect,
)(Dialog1);