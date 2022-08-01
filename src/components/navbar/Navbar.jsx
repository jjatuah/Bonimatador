import React, { useState } from 'react';
import "./Navbar.css";
import { Close, Menu } from '@material-ui/icons';
import logo from "../../assets/improvedCrop2.jpg";


const Navbar = () => {

  const [menuStatus, setMenuStatus] = useState(false);
  const [navbar, setNavBar] = useState(false);


  const changeBackground = () => {
    if(window.scrollY > 80) {
      setNavBar(true)
    } else {
      setNavBar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return ( 
    <div className={ navbar ? "navbar active" : "navbar"}>
      <a href="#" className='logoImg'>
        <img src={logo} alt="logo" />
      </a>

      <ul className="navLink">
        <li><a href="#">Home</a></li>
        <li><a href="#value">Benefits</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#properties">Properties</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact us</a></li>
      </ul>

      <div className="menu">
        {menuStatus ? 
          <div className="closeBtn">
            <Close 
            style={{color:"#fff", fontSize: "30px", cursor:"pointer",
            textAlign:"end"}} 
            onClick= {() => setMenuStatus(false)} 
            />
          </div>
        :
          <div className="menuBtn">
            <Menu style={{color:"#fff", fontSize: "30px", cursor:"pointer"}} onClick= {() => setMenuStatus(true)}           
            />
          </div>
        }

        {
          menuStatus && (
            <ul className="mobileNavLinks"  >
              <li><a href="#">Home</a></li>
              <li><a href="#value">Benefits</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#properties">Properties</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          )
        }
      </div>

    </div>
   );
}
 
export default Navbar;