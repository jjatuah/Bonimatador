import React from 'react';
import "./Value.css";
import valueImage from "../../assets/value1.jpg";
import { CheckBoxOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons';
import { useState } from 'react';



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
            <div className="valueItem" onClick={handleToggle1}>
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best prices in the market</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                { desc1 && <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>}
              </div>
            </div>

            <div className="valueItem" onClick={handleToggle2}>
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best interest rate</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                {desc2 && <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>}
              </div>
            </div>

            <div className="valueItem" onClick={handleToggle3}>
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best value for money</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                {desc3 && <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>}
              </div>
            </div>

            <div className="valueItem" onClick={handleToggle4}>
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Sure and secure investments</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                {desc4 && <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Value;