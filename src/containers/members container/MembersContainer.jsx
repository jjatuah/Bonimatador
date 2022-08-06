import React from 'react';
import "./MembersContainer.css";
import Member from '../../components/member/Member';
import profileImg1 from "../../assets/workProfile.jpg";
import profileImg2 from "../../assets/workProfile5.png";
import profileImg3 from "../../assets/workProfile7.jpg";
import profileImg4 from "../../assets/workProfile8.JPG";



const MembersContainer = () => {
  return ( 
    <div className="membersContainer" id='membersContainer'>
      <h2>Meet the team</h2>
      <div className="membersWrapper">
       <Member img={profileImg1} position={"C.E.O."} name={"Jasmine Turner"} phone={"#"} whatsApp={"#"} facebook={"#"} instagram={"#"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit"} />

        <Member img={profileImg4} position={"Marketing Manager"} name={"Ogbe Agnes"} phone={"#"} whatsApp={"#"} facebook={"#"} instagram={"#"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit"} />

        <Member img={profileImg3} position={"C.O.O."} name={"Bola Ahmed Tinubu"} phone={"#"} whatsApp={"#"} facebook={"#"} instagram={"#"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit"} />
      </div>
    </div>
   );
}
 
export default MembersContainer;