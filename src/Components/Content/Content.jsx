import React from 'react'
import Content1 from './Content-Components/Content-1';
import Content2 from './Content-Components/Content-2';
import Content3 from './Content-Components/Content-3';
import Content4 from './Content-Components/Content-4';
// import './React.css'

function Content(props) {
    return (
        <div className="content__block">
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
        </div>
    );
};

export default Content;