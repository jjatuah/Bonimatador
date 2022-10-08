import React from 'react';
import "./Value.css";
import valueImage from "../../assets/value1.jpg";
import { useState } from 'react';
import ValueItem from '../../components/value item/ValueItem';



const Value = () => {

  const [desc1, setDesc1] = useState(false);
  const [desc2, setDesc2] = useState(false);
  const [desc3, setDesc3] = useState(false);
  const [desc4, setDesc4] = useState(false); 


  const handleToggle1 = () => setDesc1(!desc1);
  const handleToggle2 = () => setDesc2(!desc2);
  const handleToggle3 = () => setDesc3(!desc3);
  const handleToggle4 = () => setDesc4(!desc4);


  return ( 
    <div className="value" id='value'>
      <div className="valueContainer">
        <div className="valueImage">
          <img src={valueImage} alt="" />
        </div>

        <div className="valueContent">
          <div className="valueTitle">
            <h2>Our Value</h2>
            <h3>Value we give to you</h3>
            <p className="valueTitleDesc">
              We're always ready to help provide the best service for you. We believe a good place to live can make your life better.
            </p>
          </div>

          <div className="valueItems">

            <ValueItem displayFunction={handleToggle1} title={"Integrity"} desc= {desc1 && "At Bonimatador homes, we pride ourselves in providing the best quality and we never compromise standard. We keep to our words and to time and we are loyal in serving our client's needs."}/>

            <ValueItem displayFunction={handleToggle2} title={"Value For Money"} desc= {desc2 && "With us, you get quality for the price paid. We create a balance between efficiency and effectiveness."}/>

            <ValueItem displayFunction={handleToggle3} title={"Service Delivery"} desc= {desc3 && "We are customer focused  and we deliver excellence. You think it, we will build and deliver your dream home. We pay attention to every detail of your needs, delivering value and quality."}/>

            <ValueItem displayFunction={handleToggle4} title={"Professionalism"} desc= {desc4 && "We work with the best minds to provide excellent, cutting edge and effective services. Our work speaks professionalism. We dare to design the future of real estate with our team of bright, empowered and diverse minds."}/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Value;