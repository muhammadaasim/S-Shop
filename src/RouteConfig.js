import React from 'react';
// import ReactDOM from 'react-dom';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItems';
import NF from './Components/404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function RouteConfig() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/product/:id" element={<ProductItem/>} />
                    <Route path="*" element={<NF/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig;
