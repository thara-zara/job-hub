import React from 'react';
import "./Navbar.css";
import logo from "../assests/logo.png"


const Navbar = () => {
  return (
    <div className='navigation'>
      <div className='navitems'>
        <div className='logo'>
            <img src={logo} alt="logo"/>
        </div>
        <div className='right-nav'>
            <div className='menu'>
               <span> <i class="fa-solid fa-bars-staggered menu"></i> </span>
            </div>
            <div className='search'>
            <span>  <i class="fa-solid fa-magnifying-glass"></i> </span>
            </div>
            <div className='phone'>
            <span className='icon'>  <i class="fa-solid fa-magnifying-glass"></i> </span>
            <span className='number'>Free Call
            +1 820 123 54 87</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
