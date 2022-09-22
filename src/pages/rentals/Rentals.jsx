import React, {useEffect} from 'react';
import "./Rentals.css";
import PageBanner from '../../components/page_banner/PageBanner';
import backgroundImg from "../../assets/testimonyBackground.jpg";
import Img1 from "../../assets/rental7.jpg";
import Img2 from "../../assets/rental8.jpg";
import Img3 from "../../assets/rental3.jpg";
import Img4 from "../../assets/rental4.jpg";
import Img5 from "../../assets/rental5.jpg";
import Img6 from "../../assets/rental9.jpg";
import BgImg from "../../assets/featured10.jpg";
import Video from '../../components/video/Video';
import vid from "../../assets/rental.mp4";
import poster from "../../assets/shortletPoster.jpg";
import gallery1 from "../../assets/Banner8.jpeg";
import { CheckBoxOutlined } from '@material-ui/icons';
import PhotoBox from '../../components/photobox/PhotoBox';
import PagesNavbar from '../../components/pages navbar/PagesNavbar';
import { useLocation } from "react-router";
import Footer from '../../components/footer/Footer';


const Rentals = () => {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return ( 
    <div className="rentals">
      <PagesNavbar />
      <PageBanner img={BgImg} title={"Rental Properties"} cta={"Have a wonderful experience at our shortlet"} />
      
      <div className="vidPitch">
        <div className="vid">
           <Video poster={poster} video={vid} type={"video/mp4"} />
           <h4>Let's Walk you through our shortlet with this video</h4>
        </div>

        <div className="pitch">
          <h3>Why our shortlets are the best ?</h3>
          <p>Our appartments offer luxury style resort living in the best and most secured locations in Abuja. You'll get all the privacy you need and the experience you deserve.</p>
          <ul>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Fully serviced & 24 hour customer service</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}24 hour Electricity + Standby Power Source</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Close proximity to the Airport, Train station & Jabi Lake Park</li>
            <li>{<CheckBoxOutlined style={{color: "#2196f3", marginRight: "3.5px"}} />}Peaceful and tranquil setting with maximum privacy. </li>
          </ul>
        </div>
      </div>

      <div className="gallery">
        <h2>Gallery</h2>
        <p>images from our shortlet</p>

        <div className="photoBoxContainer">
          <PhotoBox img={Img1} desc={"The Living Room"} status= {true}/>

          <PhotoBox img={Img2} desc={"The Dinning Room"} status= {true}/>

          <PhotoBox img={Img3} desc={"The Bedroom"} status= {true}/>

          <PhotoBox img={Img4} desc={""} status= {true}/>

          <PhotoBox img={Img5} desc={""} status= {true}/>

          <PhotoBox img={Img6} desc={"The Kitchen"} status= {true}/>
        </div>
      </div>
    </div>
   );
}
 
export default Rentals;