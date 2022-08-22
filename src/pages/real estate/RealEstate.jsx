import React, {useEffect} from 'react';
import "./RealEstate.css";
import PageBanner from '../../components/page_banner/PageBanner';
import bgImg from "../../assets/real.jpg";
import Img2 from "../../assets/real2.jpg";
import Img3 from "../../assets/real3.jpg";
import Img4 from "../../assets/real4.JPG";
import Img5 from "../../assets/real5.JPG";
import Img6 from "../../assets/real6.JPG";
import Img7 from "../../assets/edit1.png";
import Img8 from "../../assets/edit2.png";
import Img9 from "../../assets/edit4.png";
import Img10 from "../../assets/edit5.png";
import Img11 from "../../assets/edit6.png";
import Img12 from "../../assets/edit7.png";
import Video from '../../components/video/Video';
import vid from "../../assets/Vid 3.mp4";
import poster from "../../assets/About2.jpg";
import { CheckBoxOutlined } from '@material-ui/icons';
import PhotoBox from '../../components/photobox/PhotoBox';
import PagesNavbar from '../../components/pages navbar/PagesNavbar';
import { useLocation } from "react-router";



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
          <h3>5 Semi-Detached Duplexes</h3>
          <p> Amenities available include: </p>
          <ul>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}24hrs Electricity supply</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}CCTV Camera</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}24hrs Security</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Underground sewage system</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Pipe borne water</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Tarred Road</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Smart home option</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Solar inverter system</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Home cinema</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Motorized gate system</li>
          </ul>
        </div>
      </div>

      <div className="gallery">
        <h2>Gallery</h2>
        <p>Delectus quae inventore molestiae accusamus</p>

        <div className="photoBoxContainer">
          <PhotoBox img={bgImg} desc={"Lorem ipsum, dolor sit amet con"} status= {true}/>

          <PhotoBox img={Img2} desc={"Lorem ipsum, dolor sit amet con"} status= {true}/>

          <PhotoBox img={Img3} desc={"Lorem ipsum, dolor sit amet con"} status= {true}/>

          <PhotoBox img={Img4} desc={"Lorem ipsum, dolor sit amet con"} status= {true}/>

          <PhotoBox img={Img5} desc={"Lorem ipsum, dolor sit amet con"} status= {true}/>

          <PhotoBox img={Img6} desc={"Lorem ipsum, dolor sit amet con"} status= {true}/>


          {/* <PhotoBox img={Img7} />

          <PhotoBox img={Img8} />

          <PhotoBox img={Img9} />

          <PhotoBox img={Img10} />

          <PhotoBox img={Img11} />

          <PhotoBox img={Img12} /> */}
        </div>
      </div>
    </div>
   );
}
 
export default RealEstate;