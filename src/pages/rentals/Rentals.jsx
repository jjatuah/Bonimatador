import React from 'react';
import "./Rentals.css";
import PageBanner from '../../components/page_banner/PageBanner';
import backgroundImg from "../../assets/testimonyBackground.jpg";
import Video from '../../components/video/Video';
import vid from "../../assets/Vid 3.mp4";
import poster from "../../assets/About2.jpg";

const Rentals = () => {
  return ( 
    <div className="rentals">
      <PageBanner img={backgroundImg} title={"Rental Properties"} cta={"Have a wonderful experience at our shortlet"} />
      <Video poster={poster} video={vid} type={"video/mp4"} />
    </div>
   );
}
 
export default Rentals;