import React from 'react'
// import './App.css'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App(props) {
    return (
        <div className="wrapper">
            <Header headerLinksList={props.state.headerPage.headerLinksList} />
            <div className="main__container">
                <Sidebar />
                <Content newLink={props.state.headerPage.newLink} dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default App;