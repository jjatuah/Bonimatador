import React from 'react';
import "./Video.css";


const Video = ({poster, video ,type}) => {
  return ( 
    <div className="video">
      <video width="80%" height="80%" controls preload="none" poster={poster}>
        <source src={video} type={type}/>
        Your browser does not support the video tag.
      </video>
    </div>
   );
}
 
export default Video;