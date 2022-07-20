import React, {useRef, useState} from 'react';
import "./Contact.css";
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp, YouTube } from '@material-ui/icons';
import emailjs from "emailjs-com";
import validator from 'validator';


const Contact = () => {

  const [success, setSuccess] = useState("")

  const form = useRef();

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Enter a valid Email!')
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2zvyalq', 'template_93j4ai1', form.current, 'V-gfdY9NXDrj3qowH')
      .then(() => {
          setSuccess("Your message was successfully sent");
      }, () => {
        setSuccess("There was an error sending your message. Please try again.")
      });

      e.target.reset();
  };


  return ( 
    <div className="contact"  id='contact'>
      <div className="header" >
        <h2 id='secColor'>Contact Us</h2>
        <p>Let me help you code your wonderful Idea into reality.</p>
      </div>

      <div className="content">
        <div className="contactInfo">
          <h3>Contact Info</h3>
          <div className="contactInfoBx">

            <div className="box">
              <div className="icon"><Phone /></div>
              <h3>Phone</h3>
              <h5>+2348165379722</h5>
              <a href="tel:+2348165379722" target="blank">Click to call us now.</a>
            </div>

            <div className="box">
              <div className="icon"><MailOutline /></div>
              <h3>Email</h3>
              <h5>jjatuah@gmail.com</h5>
              <a href="mailto:jjatuah@gmail.com" target="blank">Click to Send an Email</a>
            </div>

            <div className="box">
              <div className="icon"><WhatsApp /></div>
              <h3>WhatsApp</h3>
              <h5>+2348165379722</h5>
              <a href="https://wa.me/+2348165379722?text=I'm%20from%20your%20portfolio%20website%20and%20I'm%20interested%20in%20working%20with%20you" target="blank">Click to Send a WhatsApp message</a>
            </div>
          </div>
        </div>

        <div className="formBx">
          <form ref={form} onSubmit={sendEmail}>
            <h3 className='formHeader'>Send us a Message</h3>
            
            <div className="success">{success}</div>

            <input type="text" required name='name' placeholder='Your Name' />
            <input type="email" onChange={(e) => validateEmail(e)} required name='email' placeholder='Your Email' />
            <span style={{
              fontWeight: 'bold',
              color: 'var(--altColor)',
              paddingBottom: "0.5rem",
              paddingTop: "0"
            }}>{emailError}</span>
            <textarea placeholder='Your Message' required name="message" id="" ></textarea>
            <input type="submit" name='' />
          </form>
        </div>

      </div>
    </div>
   );
}
 
export default Contact;