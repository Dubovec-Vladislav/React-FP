import React from 'react'
// import './App.css'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App(props) {
    return (
        <div className="wrapper">
            <Header headerLinksList={props.state.headerLinksList} />
            <div className="main__container">
                <Sidebar />
                <Content state={props.state} dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default App;