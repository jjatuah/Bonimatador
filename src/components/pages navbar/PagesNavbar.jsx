import React from 'react';
import "./PagesNavbar.css";
import { Close, Menu } from '@material-ui/icons';
import logo from "../../assets/improvedCrop2.jpg";
import { Link } from "react-router-dom";


const PagesNavbar = () => {
  
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
      <a href="#" className='logo'>
        <img src={logo} alt="logo" />
      </a>

      <ul className="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/value">Benefits</Link></li>
        <li><Link to="#about">Our Services</Link></li>
        <li><Link to="#course">Properties</Link></li>
        <li><Link to="#plan">Testimonials</Link></li>
        <li><Link to="#team">Contact us</Link></li>
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
 
export default PagesNavbar;