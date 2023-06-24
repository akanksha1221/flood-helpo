import React,{useState} from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../Css/Navbar.css';
import {FiMail,FiPhone} from 'react-icons/fi';
import {FaBars,FaTimes} from 'react-icons/fa';
//import logo from '../images/Logo1.png';
import { IconContext } from 'react-icons/lib';

import icon from '../images/icon.png';
import logo from '../images/logo.png';

function Navbar(){
    const [click, setClick]= useState(false);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu =()=> setClick(false);

    
return(
    <> 
        <div className="container-fluid top-header">
            <div className="row">
                <div className="col-6"><a href="tel:+919090909090" className="topLink"><FiPhone className="phone"/> 9090909090 </a></div>
                <div className="col-6 text-right"><a href="mailto:abc@gmail.com" className="topLink"><FiMail className="mail"/> floodhelpo@xyz.com</a></div>
            </div>
        </div>
        <div className="container">
            <div className="row logo">
            {/* <Link to="/"><img src={logo} alt="Logo" /></Link>*/}        
                <div className="col-12  icon"><Link to="/"><img src={icon} alt="Logo" /></Link></div>
                <div className="col-12 title "><Link to="/"><img src={logo} alt="Logo" /></Link></div>
            </div>
        </div>
   
        <IconContext.Provider value={{color:`#fff`}}>
            <div className="menu-icon" onClick={handleClick}>
                {click?<FaTimes className="toggle cross"/>:<FaBars className="toggle bars"/>}
            </div>
            <nav>
                <ul className={click ? "nav-list active" : "nav-list"}>
                    <li><NavLink className='nav-link' onClick={closeMobileMenu} to="/">Home</NavLink></li>
                    <li><NavLink className='nav-link' onClick={closeMobileMenu} to="/news">News</NavLink></li>
                    <li><NavLink className='nav-link' onClick={closeMobileMenu} to="/contact">contact</NavLink></li>
                    <li><NavLink className='nav-link' onClick={closeMobileMenu} to="/about">About Us</NavLink></li>
                    <li><NavLink className='nav-link' onClick={closeMobileMenu} to="/donate">donate</NavLink></li>
                </ul>
            </nav>
        </IconContext.Provider>         
    </>
    )
}
export default Navbar;