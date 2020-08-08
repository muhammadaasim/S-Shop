import React from 'react'
import Products from './section/Products';
import Details from './section/Details';
import { Route,Routes } from 'react-router-dom';
import '../index.css';
const Section = () => {
    return (
        <section>
            <Routes>
            <Route path="/product" element={<Products/>}/>
            <Route path="/product/:id" element={<Details/>}/>
            </Routes>
        </section>
    )
}
export default Section;