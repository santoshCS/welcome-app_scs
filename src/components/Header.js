import React from 'react'
import "./Header.css"
import logo from '../assets/logo.png';
import navVector from '../assets/VectorPls.svg'

function Header() {
  return (
    <div className="navbar">
        <input type="checkbox" className="checkbox" id="click" hidden />
        {/* <!-- sidebar --> */}
        <div className="nav-logo">
            <div className="logo-div">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="mobile-nav">
                <label for="click">
                    <div className="menu-icon">
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>
                </label>
            </div>
        </div>
        <div className="nav-content">
           
            <ul className="nav_list_middle">
                <li>Home</li>
                <li>Our Products</li>
                <li>About TAPDATA</li>
            </ul>
            

            <ul className="nav-list">
                <li>Log in</li> 
                <span className='nav_pipe'>|</span>
                <li>Create Account <span><img src={navVector} alt="navigation-svg" className='nav_svg'/></span></li>
            </ul>

        </div>
    </div>
  )
}

export default Header
