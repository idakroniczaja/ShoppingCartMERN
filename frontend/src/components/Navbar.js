import React, { Component } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
            {/* logo */}
            <div className='navbar__logo'>
            <h2>MERN Shopping Cart</h2>
            </div>
       
             <ul className='navbar__links'>
             <li>
             <Link to='/cart' className='cart__link'>
             <i className='fas fa-shopping-cart'></i>
             <span>
             Cart
             <span className='cartlogo__badge'>0</span>
             </span>
             </Link>
             </li>

             <li>
             <Link to='/'>
             Shop
             </Link>
             </li>

             </ul>

           
             <div className='hamburger__menu'>
                <div></div>
                <div></div>
                <div></div>
             </div>

                
            </nav>
        )
    }
}
