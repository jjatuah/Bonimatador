import React from 'react';
import "./Value.css";
import valueImage from "../../assets/value1.jpg";
import { CheckBoxOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons';



const Value = () => {
  return ( 
    <div className="value">
      <div className="valueContainer">
        <div className="valueImages">
          <div className="valueOrbe"></div>
          <div className="valueImage">
            <img src={valueImage} alt="" />
          </div>
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
            <div className="valueItem">
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best prices in the market</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>
              </div>
            </div>

            <div className="valueItem">
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best prices in the market</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>
              </div>
            </div>

            <div className="valueItem">
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best prices in the market</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>
              </div>
            </div>

            <div className="valueItem">
              <div className="valueItemHeader">
                <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
                <h3> Best prices in the market</h3>
                <div className="valueItemArrow">
                  <span>{<KeyboardArrowDownOutlined/>}</span>
                </div>
              </div>

              <div className="valueItemDesc">
                <p>The prices wwe provide is the best in the market. We guarantee no price changes on your property due to  various unexpected costs that may come.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Value;