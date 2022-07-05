import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className="parent-navbar">
                <div className="left">
                <i class="fa-solid fa-table-cells-large  me-1"style={{fontSize:"22px"}} ></i><span className='navbar-cat'>Categories</span><i style={{fontSize:"22px"}} class="fa-solid fa-angle-down ms-2"></i>
                </div>
                <div className="right">
                    <ul>
                        <li><NavLink className="links" to='/'>Home</NavLink></li>
                        <li><NavLink className="links" to='/pages'>Products</NavLink></li>
                        <li><NavLink className="links" to='/about'>About Us</NavLink></li>
                        
                        <li><NavLink className="links" to='/contact'>Contact Us</NavLink></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar