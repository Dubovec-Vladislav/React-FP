import React from 'react'
import Content1 from './Content-Components/Content-1'
import Content2 from './Content-Components/Content-2'
import Content3 from './Content-Components/Content-3'
import Content4 from './Content-Components/Content-4'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import './React.css'

function Content(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Content1 />} />
                <Route path="/2" element={<Content2 />} />
                <Route path="/3" element={<Content3 />} />
                <Route path="/4" element={<Content4 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Content;