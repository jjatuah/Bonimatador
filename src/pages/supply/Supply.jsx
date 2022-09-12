import React, {useEffect} from 'react';
// import "./Supply.css";
import PageBanner from '../../components/page_banner/PageBanner';
import Img1 from "../../assets/CAS1.jpg";
import Img2 from "../../assets/CAS2.png";
import Img3 from "../../assets/CAS3.jpg";
import Img4 from "../../assets/CAS4.png";
import Img5 from "../../assets/CAS5.jpg";
import Img6 from "../../assets/CAS6.jpg";
import Video from '../../components/video/Video';
import vid from "../../assets/contractAndSupply.mp4";
import poster from "../../assets/About2.jpg";
import { CheckBoxOutlined } from '@material-ui/icons';
import PhotoBox from '../../components/photobox/PhotoBox';
import PagesNavbar from '../../components/pages navbar/PagesNavbar';
import { useLocation } from "react-router"; 



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
          <p>We have the expertise and capacity to meet your demands without delay. Our excellent service and express/timely delivery will save you time, money and other resources.</p>
          <ul>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Timely Delivery</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Great value at the best price</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Reliability</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Quality products & excellent service</li>
          </ul>
        </div>
      </div>

      <div className="gallery">
        <h2>Gallery</h2>
        <p>We supply the following</p>

        <div className="photoBoxContainer">
          <PhotoBox img={Img1} desc={"All types of Sand"} status= {true}/>

          <PhotoBox img={Img2} desc={"Steel Rods"} status= {true}/>

          <PhotoBox img={Img3} desc={"All types of stones"} status= {true}/>

          <PhotoBox img={Img4} desc={"Alluminum roofing sheets"} status= {true}/>

          <PhotoBox img={Img5} desc={"Interlock Tyles"} status= {true}/>

          <PhotoBox img={Img6} desc={"Cement"} status= {true}/>
        </div>
      </div>
    </div>
   );
}
 
export default Supply;