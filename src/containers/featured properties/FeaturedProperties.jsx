import React from 'react';
import "./FeaturedProperties.css";
import FeaturedProperty from '../../components/featured property/FeaturedProperty';
import featured1 from "../../assets/real4.JPG";
import featured10 from "../../assets/featured10.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/swiper.min.css";
// import "swiper/swiper.min.css/free-mode"; 



const FeaturedProperties = () => {
  return ( 
    <div className="featuredProperties" id='properties'>
      <h2>Our featured properties</h2>
      <div className="featuredPropertyContainer">
          <FeaturedProperty img={featured10} alt={"property image"} price={"₦25,000/Night"} location={"Kado Abuja"} type={"For Rent"} setting={"Rental Shortlet"} description={"Fall in love with the peaceful tranquil setting of our spacious four bedroom duplex located in the heart of Abuja. We offer you a luxury style, resort-living experience with all the nedded privacy"} area={"3000 sqft"} beds={"4"} baths={"4"} detailsPage={"/rentals"} />

          <FeaturedProperty img={featured1} alt={"property image"} price={"₦80,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"5 Bedroom Semi-Detached Duplex"} description={"Located in a secure and serene environment with close proximity to the Airport, Train station and Jabi Lake Park"} area={"900 sqft"} beds={"5"} baths={"5"} detailsPage={"/realestate"} />
      </div>
    </div>
   );
}
 
export default FeaturedProperties;