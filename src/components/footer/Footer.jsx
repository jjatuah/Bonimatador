import React from 'react';
import "./Footer.css";
import { Facebook, Instagram, MailOutline, Phone,  WhatsApp,  ArrowRight, LocationOn } from '@material-ui/icons';
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
            <a href="https://instagram.com/schwarzmatadorhomes?r=nametag">{<Instagram style={{color: "#2196f3", marginRight: "5px"}}  />}Instagram</a>
            <a href="https://m.facebook.com/Schwarzmatadorhomes/">{<Facebook style={{color: "#2196f3", marginRight: "5px"}} />}Facebook</a>
            <a href="https://wa.me/+2348031952466?text=I'm%20from%20your%20website%20and%20I%20want%20to%20make%20an%20enquiry">{<WhatsApp style={{color: "#2196f3", marginRight: "5px"}} />}WhatsApp</a>
            <a href="tel:+2348031952466">{<Phone style={{color: "#2196f3", marginRight: "5px"}} />}Phone</a>
            <a href="mailto:bonimatador@gmail.com">{<MailOutline style={{color: "#2196f3", marginRight: "5px"}} />}Email</a>
            {/* <a href="#contact">{<MessageRounded style={{color: "#2196f3", marginRight: "5px"}} />}Send a Message</a> */}
          </div>
        </div>
      </div>

      <div className="location">
        <div className="headOffice">
          <h2>Head Office</h2>
          <div className="officeContainer">
            <p>{<LocationOn style={{color: "#2196f3"}} />} Suite 113 Anbeez Plaza,</p>
            <p>Opp. Former CAC Wuse Zone 5, Abuja</p>
          </div>
        </div>

        <div className="siteOffice">
          <h2>Site Office</h2>
          <div className="siteContainer">
            <p>{<LocationOn style={{color: "#2196f3"}} />} Plot 519, Karmo District,</p>
            <p>Near Nzamiya Hospital, Karmo - Abuja</p>
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