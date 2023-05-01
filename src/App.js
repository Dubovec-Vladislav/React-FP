import React from 'react'
// import './App.css'
import Content from './Components/Content/Content'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App(props) {
    return (
        <div className="wrapper">
            <Header headerLinksList={props.store.getState().headerLinksList} />
            <div className="main__container">
                <Sidebar />
                <Content store={props.store} />
            </div>
        </div>
    );
};

export default App;