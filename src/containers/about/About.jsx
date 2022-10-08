import React from 'react';
import "./About.css";
import aboutImage1 from "../../assets/About.jpg";
import { CheckBoxOutlined } from '@material-ui/icons';


const About = () => {
  return ( 
    <div className="about" id='about'>
      <div className="aboutText">
        <h2>about us</h2>
        <h3>Bringing modern real estate solutions to nigerians</h3>
        <p>Boni Matador Integrated Resources 
          Limited was officially incorporated 
          on the 3rd of December, 2019 to offer 
          innovative services in the Real Estate, 
          Construction and Management
          Sector. The underlying vision was 
          birthed by the desire to provide 
          clients with realistic value for money 
          and optimal returns on investment. With our head office in Abuja, our 
          goal is to be a key provider of fully 
          integrated designs, construction,
          maintenance, marketing,
          consultancy and management of real 
          estate development. Through our 
          vast experience and best in class 
          approach, we identify and implement 
          solutions that crate net value,
          teeming clients in class and style. <br /> <br /> We offer an array of construction 
          services which include but not limited:</p>
        <ul>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Civil Engineering</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Infrastructural Development</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Architectural drawing and design</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Renovation works</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Block productions and sales </li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}General Constructions</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Real Estate Marketing and Consultancy</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Real Estate Development an Management.</li>
        </ul>
      </div>

      <div className="aboutImage">
        <img src={aboutImage1} alt="" />
      </div>
    </div>
   );
}
 
export default About;