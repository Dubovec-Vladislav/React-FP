import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'

function Dialog4(props) {
    return (
        <div className="social__block">
            <div className="chats__block">
                <Chats />
            </div>
            <div className="meassages__block">
                {props.dialogName}
                <NavLink to="/chats" className="back__link"><p>Back</p></NavLink>
            </div>
        </div>
    );
};

export default Dialog4;