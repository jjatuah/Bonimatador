import React from 'react';
import "./Footer.css";
import { Facebook, Instagram, MailOutline, MessageRounded, Phone, Pinterest, Room, Twitter, WhatsApp, YouTube } from '@material-ui/icons';



const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footerLinks">
        <div className="pageLinks">
          <h2>Links</h2>
          <div className="linksContainer">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Our Value</a>
            <a href="#">Services</a>
            <a href="#">Properties</a>
            <a href="#">Testimonials</a>
          </div>
        </div>

        <div className="contactLinks">
          <h2>Contacts</h2>
          <div className="contactsContainer">
            <a href="#">{<Instagram />}Instagram</a>
            <a href="#">{<Facebook/>}Facebook</a>
            <a href="#">{<WhatsApp/>}WhatsApp</a>
            <a href="#">{<Phone/>}Phone</a>
            <a href="#">{<MailOutline/>}Email</a>
            <a href="#">{<MessageRounded/>}Send a Message</a>
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