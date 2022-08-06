import React from 'react';
import "./FeaturedProperty.css";
import { Bathtub, BathtubOutlined, BathtubRounded, ExpandLessRounded, Facebook, KingBedRounded, Phone, WhatsApp} from '@material-ui/icons';
import { Link } from "react-router-dom";



const FeaturedProperty = ({img, alt, price, location, type, setting, description, area, beds, baths, detailsPage}) => {
  return ( 
    <div className="featuredProperty">
        <div className="propertyImage">
           <img src={img} alt={alt} />
           <div className="info">
              <h3>{location}</h3>
              <h3>{type}</h3>
           </div>
        </div>

        <div className="propertyData">
          <div className="price_contact">
            <h3>{price}</h3>
            <a href="tel:+2348031952466" target="_blank" ><Phone /></a>
            <a href="https://wa.me/+2348031952466?text=I'm%20from%20your%20website%20and%20I%20want%20to%20make%20an%20enquiry" target="_blank" ><WhatsApp /></a>
            <a href="https://m.facebook.com/Schwarzmatadorhomes/" target="_blank" ><Facebook /></a>
          </div>

          <div className="propertyDesc">
            <h3>{setting}</h3>
            <p>{description}</p>
          </div>

          <div className="otherDetails">
            <h3>{<ExpandLessRounded/>}{area}</h3>
            <h3>{<KingBedRounded />}{beds}</h3>
            <h3>{<BathtubRounded />}{baths}</h3>
          </div>
        </div>

        <div className="propertyButtons">
          <a href="#contact">request info</a>
          <Link to={detailsPage} target="_blank">view details</Link>
        </div>
    </div>
   );
}
 
export default FeaturedProperty; 