import React, {useEffect} from 'react';
// import "./RealEstate.css"
import PageBanner from '../../components/page_banner/PageBanner';
import backgroundImg from "../../assets/testimonyBackground.jpg";
import bgImg from "../../assets/real.jpg";
import Img2 from "../../assets/real2.jpg";
import Img3 from "../../assets/real3.jpg";
import Img4 from "../../assets/real4.JPG";
import Img5 from "../../assets/real5.JPG";
import Img6 from "../../assets/real6.JPG";
import Video from '../../components/video/Video';
import vid from "../../assets/Vid 3.mp4";
import poster from "../../assets/About2.jpg";
import gallery1 from "../../assets/Banner8.jpeg";
import { CheckBoxOutlined } from '@material-ui/icons';
import PhotoBox from '../../components/photobox/PhotoBox';
import PagesNavbar from '../../components/pages navbar/PagesNavbar';
import { useLocation } from "react-router";
import Footer from '../../components/footer/Footer';



const RealEstate = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return ( 
    <div className="RealEstate">
      <PagesNavbar />
      <PageBanner img={bgImg} title={"Real Estate"} cta={"We're redefining real estate in Nigeria"} />
      
      <div className="vidPitch">
        <div className="vid">
           <Video poster={poster} video={vid} type={"video/mp4"} />
           <h4>Delectus quae inventore molestiae accusamus</h4>
        </div>

        <div className="pitch">
          <h3>With us real estate gets real</h3>
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
        <p>Delectus quae inventore molestiae accusamus</p>

        <div className="photoBoxContainer">
          <PhotoBox img={bgImg} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={Img2} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={Img3} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={Img4} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={Img5} desc={"Lorem ipsum, dolor sit amet con"}/>

          <PhotoBox img={Img6} desc={"Lorem ipsum, dolor sit amet con"}/>
        </div>
      </div>
    </div>
   );
}
 
export default RealEstate;