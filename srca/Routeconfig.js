import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'

const Routeconfig = () => {
    return (
            <Router>
                <Navbar />
                <Routes>
                    {/* <Route path="/" element={<Home/>} />
                    <Route path="/product" element={<Product/>} />
                    <Route path="/product/:id" element={<ProductItem/>} />
                    <Route path="*" element={<NF/>}/> */}
                </Routes>
            </Router>
    )
}

export default Routeconfig
