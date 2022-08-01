import React from 'react';
import "./Footer.css";
import { Facebook, Instagram, MailOutline, MessageRounded, Phone, Pinterest, Room, Twitter, WhatsApp,  ArrowRight } from '@material-ui/icons';
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";



const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footerLinks">

        <div className="footerImage">
          <img src={logo} alt="logo" />
        </div>

        <div className="pageLinks">
          <h2>Links</h2>
          <div className="linksContainer">
            <Link to="/">{<ArrowRight style={{color: "#2196f3"}} />}Home</Link>
            <Link to="/rentals">{<ArrowRight style={{color: "#2196f3"}} />}Rental Shortlet</Link>
            <Link to="/realestate">{<ArrowRight style={{color: "#2196f3"}} />}Real Estate</Link>
            <Link to="/supply">{<ArrowRight style={{color: "#2196f3"}} />}Contract & Supply</Link>
          </div>
        </div>

        <div className="contactLinks">
          <h2>Contacts</h2>
          <div className="contactsContainer">
            <a href="#">{<Instagram style={{color: "#2196f3", marginRight: "5px"}}  />}Instagram</a>
            <a href="#">{<Facebook style={{color: "#2196f3", marginRight: "5px"}} />}Facebook</a>
            <a href="#">{<WhatsApp style={{color: "#2196f3", marginRight: "5px"}} />}WhatsApp</a>
            <a href="#">{<Phone style={{color: "#2196f3", marginRight: "5px"}} />}Phone</a>
            <a href="#">{<MailOutline style={{color: "#2196f3", marginRight: "5px"}} />}Email</a>
            <a href="#">{<MessageRounded style={{color: "#2196f3", marginRight: "5px"}} />}Send a Message</a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <hr />
        <p>All rights reserved &copy; 2022 <br /> Bonimatador</p>
      </div>
    </div>
   );
}
 
export default Footer;