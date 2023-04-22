import React from 'react'
import './App.css';
import Content from './Components/Content/Content';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div class="main__container">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
};

export default App;
