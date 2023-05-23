import React from 'react'
// import './React.css'
import { connect } from 'react-redux';
import { addMessage, updateNewMessage } from '../../../../redux/dialogs-reducer'
import Dialog2 from './Dialog-2'

function mapStateToProps(state) {
	return {
		dialogsPage: state.dialogsPage,
	};
};

const Dialog2Container = connect(mapStateToProps, {
	addMessage, updateNewMessage
})(Dialog2); // Around Dialog1 create container component (f1 and f2 - future props)

export default Dialog2Container;