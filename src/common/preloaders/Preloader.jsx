import React from 'react'
// import './React.css'
import preloader from '../../assets/loaders/loader_3.svg'

function Preloader(props) {
    return (
        <div className="preloader__block">
            <img src={preloader} className="preloader" alt="preloader" />
        </div>
    );
};

export default Preloader;