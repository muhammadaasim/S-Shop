import React,{useState} from 'react';
import Menu from './imgs/menu.svg';
import Close from './imgs/close.svg';
import Cart from './imgs/cart.svg';
import {Link} from 'react-router-dom';
import './css/Navbar.css'
const Navbar = () => {
   const [toggle,Settoggle]=useState(false);
   console.log(toggle)
    return (
        <navbar>
        <div className="menu" onClick={()=>Settoggle(!toggle)}>
        <h1><img src={Menu} alt="menu" width="20"/> </h1>
        </div>
        <div className="logo">
        <h1><Link to="/">S-SHop</Link></h1>
        </div>
        <nav>
            <ul className={toggle ? "toggle":""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className="close" onClick={()=>Settoggle(!toggle)}>
                    <img src={Close} width="20" alt="Close"/>
                </li>
            </ul>
            <div className="nav-cart">
                <span>0</span>
                <Link to="/cart">
                <img src={Cart} alt="cart" width="20"/>
                </Link>
            </div>
        </nav>
        </navbar>
    )
}

export default Navbar
