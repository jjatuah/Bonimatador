import React from 'react';
import "./MembersContainer.css";
import Member from '../../components/member/Member';
import profileImg1 from "../../assets/workProfile11.jpg";
import profileImg4 from "../../assets/workProfile8.JPG";




const MembersContainer = () => {
  return ( 
    <div className="membersContainer" id='membersContainer'>
      <h2>Meet the team</h2>
      <div className="membersWrapper">
       <Member img={profileImg1} position={"C.E.O."} name={"Michael Gloria Ene"} phone={"#"} whatsApp={"#"} facebook={"#"} instagram={"#"}/>

        <Member img={profileImg4} position={"Marketing Manager"} name={"Ogbe Agnes"} phone={"#"} whatsApp={"#"} facebook={"#"} instagram={"#"}/>

      </div>
    </div>
   );
}
 
export default MembersContainer;