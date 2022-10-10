import React, {useState} from 'react';
import "./PagesNavbar.css";
import { Close, Menu } from '@material-ui/icons';
import logo from "../../assets/BoniMatador1.png";
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
      <Link to="/" className='logoImg'>
        <img src={logo} alt="logo" />
      </Link>

      <ul className="navLinks">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rentals">Rental Shortlet</Link></li>
        <li><Link to="/realestate">Real Estate</Link></li>
        <li><Link to="/supply">General Contract & Supply</Link></li>
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/rentals">Rental Shortlet</Link></li>
              <li><Link to="/realestate">Real Estate</Link></li>
              <li><Link to="/supply">General Contract & Supply</Link></li>
            </ul>
          )
        }
      </div>

    </div>
   );
}
 
export default PagesNavbar;