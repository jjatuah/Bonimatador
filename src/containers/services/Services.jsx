import React from 'react';
import "./Services.css";
import Service from '../../components/service/Service';
import service1 from "../../assets/Service1.jpg";
import service2 from "../../assets/Service2.jpg";
import service3 from "../../assets/Service3.jpg";
import aboutImage from "../../assets/About2.jpg";


const Services = () => {
  return ( 
    <div className="services" id='services'>
      <div className="servicesHeader">
        <h2>Our Services</h2>
      </div>
      <div className="servicesContainer">
        <Service img={aboutImage} title={"Real Estate"} path={"/realestate"} />
        <Service img={service2} title={"Rental Appartments"} path={"/rentals"} />
        <Service img={service3} title={"General Contract And Supply"} path={"/supply"} />
      </div>
    </div>
   );
}
 
export default Services; 