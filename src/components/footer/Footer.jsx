import React from 'react';
import "./Footer.css";
import { Facebook, Instagram, MailOutline, MessageRounded, Phone, Pinterest, Room, Twitter, WhatsApp,  ArrowRight } from '@material-ui/icons';



const Footer = () => {
  return ( 
    <div className="footer">
      <div className="footerLinks">
        <div className="pageLinks">
          <h2>Links</h2>
          <div className="linksContainer">
            <a href="#">{<ArrowRight style={{color: "#2196f3"}} />}Home</a>
            <a href="#">{<ArrowRight style={{color: "#2196f3"}} />}About Us</a>
            <a href="#">{<ArrowRight style={{color: "#2196f3"}} />}Our Value</a>
            <a href="#">{<ArrowRight style={{color: "#2196f3"}} />}Services</a>
            <a href="#">{<ArrowRight style={{color: "#2196f3"}} />}Properties</a>
            <a href="#">{<ArrowRight style={{color: "#2196f3"}} />}Testimonials</a>
          </div>
        </div>

        <div className="contactLinks">
          <h2>Contacts</h2>
          <div className="contactsContainer">
            <a href="#">{<Instagram style={{color: "#2196f3"}}  />}Instagram</a>
            <a href="#">{<Facebook style={{color: "#2196f3"}} />}Facebook</a>
            <a href="#">{<WhatsApp style={{color: "#2196f3"}} />}WhatsApp</a>
            <a href="#">{<Phone style={{color: "#2196f3"}} />}Phone</a>
            <a href="#">{<MailOutline style={{color: "#2196f3"}} />}Email</a>
            <a href="#">{<MessageRounded style={{color: "#2196f3"}} />}Send a Message</a>
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