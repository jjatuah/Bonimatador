import React from 'react';
import "./Member.css";
import { Facebook, Instagram, Phone, WhatsApp} from '@material-ui/icons';



const Member = ({img, position, name, phone, whatsApp, facebook, instagram, text}) => {
  return ( 
    <div className="member">
      <div className="memberImage">
        <img src={img} alt="member profile image"/>
        <div className="memberInfo">
          <h3>{position}</h3>
          <h3>{name}</h3>
        </div>
      </div>

      <div className="memberData">
         <div className="memberSocials">
            <a href={phone} target="_blank" rel="noopener noreferrer" ><Phone /></a>
            <a href={whatsApp} target="_blank" rel="noopener noreferrer" ><WhatsApp /></a>
            <a href={facebook} target="_blank" rel="noopener noreferrer" ><Facebook /></a>
            <a href={instagram} target="_blank" rel="noopener noreferrer" ><Instagram /></a>
          </div>

          <div className="memberText">
            <p>{text}</p>
          </div>
      </div>
    </div>
   );
}
 
export default Member;