import React, {useEffect} from 'react';
// import "./RealEstate.css";
import PageBanner from '../../components/page_banner/PageBanner';
import bgImg from "../../assets/real.jpg";
import Img2 from "../../assets/real2.jpg";
import Img3 from "../../assets/real3.jpg";
import Img4 from "../../assets/real4.JPG";
import Img5 from "../../assets/real5.JPG";
import Img6 from "../../assets/real6.JPG";
import Video from '../../components/video/Video';
import vid from "../../assets/realEstate.mp4";
import poster from "../../assets/realEstatePoster.jpg";
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
           <h4>Let's take you through our current project with this video</h4>
        </div>

        <div className="pitch">
          <h3>Poco Boninni Court (5 Bedroom Semi-Detached Duplex) </h3>
          <p> Internal spaces are laid out intentionally, to allow for adequate living accommodation. <br /> <br /> Amenities available include: </p>
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
        <p>Project in pictures</p>

        <div className="photoBoxContainer">
          <PhotoBox img={bgImg} desc={"Project under construction"} status= {true}/>

          <PhotoBox img={Img2} desc={"Aerial view of project under construction"} status= {true}/>

          <PhotoBox img={Img3} desc={"Front view of project under construction"} status= {true}/>

          <PhotoBox img={Img4} desc={"3D front view"} status= {true}/>

          <PhotoBox img={Img5} desc={"3D aerial view"} status= {true}/>

          <PhotoBox img={Img6} desc={"3D side view"} status= {true}/>
        </div>
      </div>
    </div>
   );
}
 
export default RealEstate;