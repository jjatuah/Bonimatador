import React from 'react';
import "./Video.css";


const Video = ({poster, video ,type}) => {
  return ( 
    <div className="video">
      <video controls preload="none" poster={poster}>
        <source src={video} type={type}/>
        Your browser does not support the video tag.
      </video>
    </div>
   );
}
 
export default Video;