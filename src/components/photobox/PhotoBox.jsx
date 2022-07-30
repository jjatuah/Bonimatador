import React from 'react';
import "./PhotoBox.css";



const PhotoBox = ({img, desc}) => {
  return ( 
    <div className="photoBox">
      <img src={img} alt="" />
      <div className="photoDesc">
        <h3>{desc}</h3>
      </div>
    </div>
   );
}
 
export default PhotoBox;