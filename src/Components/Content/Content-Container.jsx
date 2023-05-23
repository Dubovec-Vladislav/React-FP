import React from 'react'
// import './React.css'
import { connect } from 'react-redux';
import Content from './Content';

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(Content);