import React from 'react';
import "./Rentals.css";
import PageBanner from '../../components/page_banner/PageBanner';
import backgroundImg from "../../assets/testimonyBackground.jpg";
import Video from '../../components/video/Video';
import vid from "../../assets/Vid 3.mp4";
import poster from "../../assets/About2.jpg";
import gallery1 from "../../assets/Banner8.jpeg";
import { CheckBoxOutlined } from '@material-ui/icons';
import PhotoBox from '../../components/photobox/PhotoBox';
import PagesNavbar from '../../components/pages navbar/PagesNavbar';


const Rentals = () => {
  return ( 
    <div className="rentals">
      <PagesNavbar />
      <PageBanner img={backgroundImg} title={"Rental Properties"} cta={"Have a wonderful experience at our shortlet"} />
      
      <div className="vidPitch">
        <div className="vid">
           <Video poster={poster} video={vid} type={"video/mp4"} />
           <h4>Let's Walk you through our shortlet with this video</h4>
        </div>

        <div className="pitch">
          <h3>Why our shortlets are the best ?</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit?</p>
          <ul>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}How to support your Immune system</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}A guide to 30 day fitness and workout challenges</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Guide to ease your back in the gym</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}The mental health benefits of exercise</li>
          </ul>
        </div>
      </div>

      <div className="gallery">
        <h2>Gallery</h2>
        <p>images from our shortlet</p>

        <div className="photoBoxContainer">
          <PhotoBox img={gallery1} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={gallery1} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={gallery1} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={gallery1} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={gallery1} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={gallery1} desc={"Lorem ipsum, dolor sit amet con"}/>
        </div>
      </div>
    </div>
   );
}
 
export default Rentals;