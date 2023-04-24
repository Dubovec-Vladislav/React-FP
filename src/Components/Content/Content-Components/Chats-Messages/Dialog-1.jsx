import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"
import Chats from '../Chats/Chats'

function MeassagesItem(props) {
    return (
        <div className="meassages__item">
            <div className="message__title">{props.dialogName}</div>
            <div className="message__content">{props.dialogText}</div>
        </div>
    );
};

function YouMeassagesItem(props) {
    return (
        <div className="meassages__item meassages__item_you">
            <div className="message__title">{props.dialogName}</div>
            <div className="message__content">{props.dialogText}</div>
        </div>
    );
};

function Dialog1(props) {
    return (
        <div className="social__block">
            <div className="chats__block">
                <Chats />
            </div>
            <div className="meassages__block">
                <div class="meassages__content">
                    <MeassagesItem dialogName={props.dialogName} dialogText="Lorem ipsum dolor sit amet." />
                    <YouMeassagesItem dialogName="You" dialogText="Consectetur adipisicing elit. Ullam, nihil." />
                    <YouMeassagesItem dialogName="You" dialogText="Veritatis doloribus culpa officiis quo magnam mollitia tempore porro necessitatibus? Assumenda, rem!" />
                    <MeassagesItem dialogName={props.dialogName} dialogText="Adipisicing elit. Modi libero impedit sunt, est eos saepe." />
                </div>
                <div className="message__back"><NavLink to="/chats" className="back__link"><p>Back</p></NavLink></div>
            </div>
        </div>
    );
};

export default Dialog1;