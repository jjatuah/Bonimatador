import React from 'react';
import "./About.css";
import aboutImage1 from "../../assets/About.jpg";
import aboutImage2 from "../../assets/About2.jpg";
import { CheckBoxOutlined } from '@material-ui/icons';


const About = () => {
  return ( 
    <div className="about" id='about'>
      <div className="aboutText">
        <h2>about us</h2>
        <h3>Bringing modern real estate solutions to nigerians</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit?</p>
        <ul>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}How to support your Immune system</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}A guide to 30 day fitness and workout challenges</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Guide to ease your back in the gym</li>
          <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}The mental health benefits of exercise</li>
        </ul>
      </div>

      <div className="aboutImage">
        <img src={aboutImage1} alt="" />
      </div>
    </div>
   );
}
 
export default About;