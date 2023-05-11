import React from 'react'
// import './App.css'
// import Header from './Components/Header/Header'
import HeaderContainer from './components/Header/Header-Container';
import Sidebar from './components/Sidebar/Sidebar'
import Content from './components/Content/Content'

function App(props) {
    return (
        <div className="wrapper">
            <HeaderContainer />
            <div className="main__container">
                <Sidebar />
                <Content newLink={props.state.headerPage.newLink} dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default App;