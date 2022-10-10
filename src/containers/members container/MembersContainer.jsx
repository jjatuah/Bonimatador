import React from 'react';
import "./MembersContainer.css";
import Member from '../../components/member/Member';
import profileImg1 from "../../assets/workProfile2.JPG";
import profileImg4 from "../../assets/workProfile1.jpg";




const MembersContainer = () => {
  return ( 
    <div className="membersContainer" id='membersContainer'>
      <h2>Meet the team</h2>
      <div className="membersWrapper">
       <Member img={profileImg1} position={"C.E.O."} name={"Michael Gloria Ene"} phone={"tel:+2348051644679"} whatsApp={"https://wa.me/+2348051644679?text=I'm%20from%20your%20website%20and%20I%20want%20to%20make%20an%20enquiry"} facebook={"https://m.facebook.com/Schwarzmatadorhomes/"} instagram={"https://instagram.com/schwarzmatadorhomes?r=nametag"}/>

        <Member img={profileImg4} position={"Marketing Manager"} name={"Ogbe Agnes"} phone={"tel:+2349063734872"} whatsApp={"https://wa.me/+2349063734872?text=I'm%20from%20your%20website%20and%20I%20want%20to%20make%20an%20enquiry"} facebook={"https://m.facebook.com/Schwarzmatadorhomes/"} instagram={"https://instagram.com/schwarzmatadorhomes?r=nametag"}/>

      </div>
    </div>
   );
}
 
export default MembersContainer;