import React from 'react';
import "./Service.css";



const Service = ({img, title, path}) => {
  return ( 
    <div className="service">
      <div className="serviceImageContainer">
        <img src={img} alt="" />
      </div>
      <div className="serviceDesc">
        <h4>{title}</h4>
        <a href={path}>view more</a>
      </div>
    </div>
   );
}
 
export default Service;