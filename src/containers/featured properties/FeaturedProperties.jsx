import React from 'react';
import "./FeaturedProperties.css";
import FeaturedProperty from '../../components/featured property/FeaturedProperty';
import featured1 from "../../assets/featured1.jpg";
import featured2 from "../../assets/featured2.jpg";



const FeaturedProperties = () => {
  return ( 
    <div className="featuredProperties">
      <h2>Our featured properties</h2>
      <div className="featuredPropertyContainer">
        <FeaturedProperty img={featured1} alt={"property image"} price={"120,000,000"} location={"Asokoro Abuja"} type={"For Rent"} setting={"10 bedroom duplex"} description={"A beautiful 10 bedroom duplex in the heart of Asokoro with a pool and beautiful vegetation that gives a feeling of summer all year long. "} area={"3000 sqft"} beds={"10"} baths={"12"} detailsPage={"#"} />

        <FeaturedProperty img={featured2} alt={"property image"} price={"100,000,000"} location={"Kubwa Abuja"} type={"For Sale"} setting={"4 bedroom duplex"} description={"A beautiful 4 bedroom duplex in the heart of Kubwa Abuja. The building is located in a secure and serene environment. You'll definitely love it. "} area={"900 sqft"} beds={"4"} baths={"6"} detailsPage={"#"} />
      </div>
    </div>
   );
}
 
export default FeaturedProperties;