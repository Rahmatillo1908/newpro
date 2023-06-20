import React from 'react'
import "./Navbar.css"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
const Navbar = () => {
   return (
      <div className="container">
         <div className="wrapper">
            <div className="left">
               <span className="language">EN</span>
               <div className="searchContainer">
                  <input className='input ' type="text" placeholder='' />
                  <AiOutlineSearch style={{ color: "gray", fontSize: 16 }} />
               </div>
            </div>
            <div className="center">
               <h1 className="logo">LOGO</h1>
            </div>
            <div className="right">
               <div className="menuItem">REGISTER</div>
               <div className="menuItem">SIGN IN</div>
               <div className="menuItem">
                  <AiOutlineShoppingCart />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar