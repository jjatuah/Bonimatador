import React from 'react';
import "./PhotoBox.css";



const PhotoBox = ({img, desc, status}) => {
  return ( 
    <div className="photoBox">
      <img src={img} alt="" />
      <div className="photoDesc">
        {status && <h3>{desc}</h3>}
      </div>
    </div>
   );
}
 
export default PhotoBox;