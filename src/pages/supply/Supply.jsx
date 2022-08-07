import React, {useEffect} from 'react';
// import "./Supply.css";
import PageBanner from '../../components/page_banner/PageBanner';
import backgroundImg from "../../assets/testimonyBackground.jpg";
import Img1 from "../../assets/CAS1.jpg";
import Img2 from "../../assets/CAS2.png";
import Img3 from "../../assets/CAS3.jpg";
import Img4 from "../../assets/CAS4.png";
import Img5 from "../../assets/CAS5.jpg";
import Img6 from "../../assets/CAS6.jpg";
import Video from '../../components/video/Video';
import vid from "../../assets/Vid 3.mp4";
import poster from "../../assets/About2.jpg";
import gallery1 from "../../assets/Banner8.jpeg";
import { CheckBoxOutlined } from '@material-ui/icons';
import PhotoBox from '../../components/photobox/PhotoBox';
import PagesNavbar from '../../components/pages navbar/PagesNavbar';
import { useLocation } from "react-router";
import Footer from '../../components/footer/Footer';



const Supply = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return ( 
    <div className="supply">
      <PagesNavbar />
      <PageBanner img={Img2} title={"General Contract and supply"} cta={"Give us a time and place and we'll surely deliver"} />
      
      <div className="vidPitch">
        <div className="vid">
           <Video poster={poster} video={vid} type={"video/mp4"} />
           <h4>Delectus quae inventore molestiae accusamus</h4>
        </div>

        <div className="pitch">
          <h3>no matter what, we always deliver</h3>
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
        <p>We supply the following</p>

        <div className="photoBoxContainer">
          <PhotoBox img={Img1} desc={"All types of Sand"}/>

          <PhotoBox img={Img2} desc={"Steel Rods"}/>

          <PhotoBox img={Img3} desc={"All types of stones"}/>

          <PhotoBox img={Img4} desc={"Alluminum roofing sheets"}/>

          <PhotoBox img={Img5} desc={"Interlock Tyles"}/>

          <PhotoBox img={Img6} desc={"Cement"}/>
        </div>
      </div>
    </div>
   );
}
 
export default Supply;