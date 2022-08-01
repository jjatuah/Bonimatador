import React from 'react';
import "./FeaturedProperties.css";
import FeaturedProperty from '../../components/featured property/FeaturedProperty';
import featured1 from "../../assets/featured1.jpg";
import featured2 from "../../assets/featured2.jpg";
import featured3 from "../../assets/featured3.jpeg";
import featured4 from "../../assets/featured4.jpg";
import featured5 from "../../assets/featured5.jpg";
import featured6 from "../../assets/featured6.jpg";
import featured7 from "../../assets/featured7.jpg";
import featured8 from "../../assets/featured8.jpg";
import featured9 from "../../assets/featured9.jpeg";
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/swiper.min.css";
// import "swiper/swiper.min.css/free-mode"; 



const FeaturedProperties = () => {
  return ( 
    <div className="featuredProperties" id='properties'>
      <h2>Our featured properties</h2>
      <div className="featuredPropertyContainer">
        <Swiper 
          freeMode={true}
          grabCursor={true}
          modules= {[FreeMode]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={30}
         >

          <SwiperSlide>
              <FeaturedProperty img={featured1} alt={"property image"} price={"120,000,000"} location={"Asokoro Abuja"} type={"For Rent"} setting={"10 bedroom duplex"} description={"A beautiful 10 bedroom duplex in the heart of Asokoro with a pool and beautiful vegetation that gives a feeling of summer all year long. "} area={"3000 sqft"} beds={"10"} baths={"12"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured2} alt={"property image"} price={"100,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured3} alt={"property image"} price={"110,000,000"} location={"Gwarimpa Abuja"} type={"For Sale"} setting={"4 bedroom appartment"} description={"A beautiful 4 bedroom appartment in the heart of Gwarimpa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"600 sqft"} beds={"4"} baths={"5"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured4} alt={"property image"} price={"200,000,000"} location={"Guzape Abuja"} type={"For Sale"} setting={"6 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Guzape Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"1000 sqft"} beds={"6"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>
          <SwiperSlide>
               <FeaturedProperty img={featured5} alt={"property image"} price={"2,000,000"} location={"Maitama Abuja"} type={"For Rent"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured6} alt={"property image"} price={"100,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured7} alt={"property image"} price={"100,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured8} alt={"property image"} price={"100,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>

          <SwiperSlide>
               <FeaturedProperty img={featured9} alt={"property image"} price={"100,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
          </SwiperSlide>
        

        
        </Swiper>
      </div>
    </div>
   );
}
 
export default FeaturedProperties;