import React from 'react';
import "./ValueItem.css";
import { CheckBoxOutlined, KeyboardArrowDownOutlined } from '@material-ui/icons';


const ValueItem = ({title, desc, displayFunction}) => {
  return ( 
    <div className="valueItem" onClick={displayFunction}>
      <div className="valueItemHeader">
        <span>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}</span>
        <h3>{title}</h3>
        <div className="valueItemArrow">
          <span>{<KeyboardArrowDownOutlined/>}</span>
        </div>
      </div>
      <div className="valueItemDesc">
        <p>{desc}</p>
      </div>
    </div>
   );
}
 
export default ValueItem;