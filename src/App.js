import React, { useEffect } from 'react'
// import './App.css'
// import Header from './Components/Header/Header'
import HeaderContainer from './components/Header/Header-Container';
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'
import ContentContainer from './components/Content/Content-Container';
import { authMe } from './redux/auth-reducer';
import { connect } from 'react-redux';

function App(props) {
  useEffect(() => {
    props.authMe();
  }, [props]);

  return (
    <div className="wrapper">
      <HeaderContainer />
      <div className="main__container">
        <Sidebar />
        <ContentContainer newLink={props.state.headerPage.newLink} dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />
      </div>
    </div>
  );
};

export default connect(null, { authMe, })(App);