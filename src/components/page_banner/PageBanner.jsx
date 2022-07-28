import React from 'react';
import "./PageBanner.css";
import bg from "../../assets/testimonyBackground.jpg"



const PageBanner = ({img, title, cta}) => {
  return ( 
    <div className="pageBanner">
      <div className="pageBannerImage">
        <img src={img} alt="" />
      </div>
      <div className="pageBannerTitle">
        <span>{title}</span>
        <h3>{cta}</h3>
      </div>
    </div>
   );
}
 
export default PageBanner;