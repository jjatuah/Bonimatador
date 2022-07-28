import React from 'react';
import "./Rentals.css";
import PageBanner from '../../components/page_banner/PageBanner';
import backgroundImg from "../../assets/testimonyBackground.jpg";


const Rentals = () => {
  return ( 
    <div className="rentals">
      <PageBanner img={backgroundImg} title={"Rental Properties"} cta={"Have a wonderful experience at our shortlet"} />
    </div>
   );
}
 
export default Rentals;