import React from 'react'
import './App.css'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App(props) {
    return (
        <div className="wrapper">
            <Header headerLinksList={props.state.headerLinksList} />
            <div class="main__container">
                <Sidebar />
                <Content chatsList={props.state.chatsList} allMessagesList={props.state.allMessagesList} />
            </div>
        </div>
    );
};

export default App;
