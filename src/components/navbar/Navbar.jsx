import { Close, Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import "./Navbar.css";


const Navbar = () => {

  const [menuStatus, setMenuStatus] = useState(false);
  const [navbar, setNavBar] = useState(false);


  const changeBackground = () => {
    if(window.scrollY >= 100) {
      setNavBar(true)
    } else {
      setNavBar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);

  return ( 
    <div className={ navbar ? "navbar active" : "navbar"}>
      <a href="#" className='logo'><span className='alt'>Boni</span>matador</a>

      <ul className="navLinks">
        <li><a href="#footer">Home</a></li>
        <li><a href="#">Benefits</a></li>
        <li><a href="#about">Our Services</a></li>
        <li><a href="#course">Properties</a></li>
        <li><a href="#plan">Testimonials</a></li>
        <li><a href="#team">Contact us</a></li>
        <li><a href="#blog">Blog</a></li>
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
            <li><a href="#footer">Home</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#about">Our Services</a></li>
            <li><a href="#course">Properties</a></li>
            <li><a href="#plan">Testimonials</a></li>
            <li><a href="#team">Contact us</a></li>
            <li><a href="#blog">Blog</a></li>
            </ul>
          )
        }
      </div>

    </div>
   );
}
 
export default Navbar;