import React from 'react';
import "./PageBanner.css";
import bg from "../../assets/testimonyBackground.jpg"



const PageBanner = () => {
  return ( 
    <div className="pageBanner">
      <div className="pageBannerImage">
        <img src={bg} alt="" />
      </div>
      <div className="pageBannerTitle">
        <span>{"Rental Properties"}</span>
        <h3>Have a wonderful experience at our shortlet</h3>
      </div>
    </div>
   );
}
 
export default PageBanner;