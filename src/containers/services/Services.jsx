import React from 'react';
import "./Services.css";
import Service from '../../components/service/Service';
import service1 from "../../assets/Service1.jpg";
import service2 from "../../assets/Service2.jpg";
import service3 from "../../assets/Service3.jpg";


const Services = () => {
  return ( 
    <div className="services">
      <div className="servicesContainer">
        <Service img={service1} title={"Real Estate"} path={"#"} />
        <Service img={service2} title={"Rental Appartments"} path={"#"} />
        <Service img={service3} title={"General Contract And Supply"} path={"#"} />
      </div>
    </div>
   );
}
 
export default Services; 