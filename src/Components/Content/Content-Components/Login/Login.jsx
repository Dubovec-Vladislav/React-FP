import React from 'react'
// import './React.css'
import { NavLink } from "react-router-dom"

function Login(props) {
    return (
        <div className="login__block">
            {props.isAuth
                ?
                <div className="login__hello">Hello, {props.login}</div>
                :
                <div className="login__hello">Please, <NavLink to="/login"> login</NavLink></div>
            }
        </div>
    );
};

export default Login;