import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div>
        <Link to="/" style={{paddingRight:'10px',}}>Home</Link> 
        <Link to="/product"  style={{paddingRight:'10px',}} >Products</Link>
        <Link to="/about">About</Link>  
        </div>
    )
}

export default Navbar
