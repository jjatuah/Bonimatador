import React from 'react';
import "./Member.css"



const Member = ({img, position, name}) => {
  return ( 
    <div className="member">
      <div className="memberImage">
        <img src={img} alt="profile image"/>
        <div className="memberInfo">
          <h3>{position}</h3>
          <h3>{name}</h3>
        </div>
      </div>

      <div className="memberData">
        
      </div>
    </div>
   );
}
 
export default Member;