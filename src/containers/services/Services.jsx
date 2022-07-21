import React from 'react';
import "./Services.css";
import Service from '../../components/service/Service';
import service1 from "../../assets/Service1.jpg";
import service2 from "../../assets/Service2.jpg";
import service3 from "../../assets/Service3.jpg";
import aboutImage from "../../assets/About2.jpg";


const Services = () => {
  return ( 
    <div className="services">
      <div className="servicesHeader">
        <h2>Our Services</h2>
        <p>We offer the services below</p>
      </div>
      <div className="servicesContainer">
        <Service img={aboutImage} title={"Real Estate"} path={"#"} />
        <Service img={service2} title={"Rental Appartments"} path={"#"} />
        <Service img={service3} title={"General Contract And Supply"} path={"#"} />
      </div>
    </div>
   );
}
 
export default Services; 