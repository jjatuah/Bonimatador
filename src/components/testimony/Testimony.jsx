import React from 'react';
import "./Testimony.css";



const Testimony = ({img, review, name, position}) => {
  return ( 
    <div className="testimony">
      <img src={img} alt="" />
      <div className="testimonyContent">
        <p>{review}</p>
        <h4>{name}</h4>
        <h5>{position}</h5>
      </div>

    </div>
   );
}
 
export default Testimony;