import React from 'react';
import "./Value.css";
import valueImage from "../../assets/value1.jpg";
import { CheckBoxOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons';
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

            <ValueItem displayFunction={handleToggle1} title={"Best prices in the market"} desc= {desc1 && "The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come."}/>

            <ValueItem displayFunction={handleToggle2} title={"Best prices in the market"} desc= {desc2 && "The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come."}/>

            <ValueItem displayFunction={handleToggle3} title={"Best value for money"} desc= {desc3 && "The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come."}/>

            <ValueItem displayFunction={handleToggle4} title={"Sure and secure investments"} desc= {desc4 && "The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come."}/>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Value;