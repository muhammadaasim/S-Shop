import React from 'react';
// import ReactDOM from 'react-dom';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import {DataProvidor} from './GlobalContext/Context';
function RouteConfig() {
    return (
        <DataProvidor>
        <div>
            <Router>
                <Navbar />
                <Section/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/cart"/>
                </Routes>
            </Router>
        </div>
        </DataProvidor>
    )
}

export default RouteConfig;
