import React from 'react';
import "./Service.css";
import { Link } from "react-router-dom";



const Service = ({img, title, path}) => {
  return ( 
    <div className="service">
      <div className="serviceImageContainer">
        <img src={img} alt="" />
      </div>
      <div className="serviceDesc">
        <h4>{title}</h4>
        <Link to={path}>view more</Link>
      </div>
    </div>
   );
}
 
export default Service;