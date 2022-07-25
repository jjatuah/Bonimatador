import React from 'react';
import "./Testimonials.css";
import Testimony from '../../components/testimony/Testimony';
import reviewImage1 from "../../assets/reviewImage1.png";
import reviewImage2 from "../../assets/reviewImage2.png";
import reviewImage3 from "../../assets/reviewImage3.png";
import bgImage from "../../assets/testimonyBackground.jpg"



const Testimonials = () => {
  return ( 
    <div className="testimonials">
      <div className="testimonialsbackground">
        <img src={bgImage} alt="" />
      </div>
      <div className="testimonyContainer">

        <h2>What are our customers saying ?</h2>

        <Testimony img={reviewImage1} review={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit?"} name={"Rita pitsburg"} position={"CEO KRC ventures"}  />

        {/* <Testimony img={reviewImage1} review={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit?"} name={"Rita pitsburg"} position={"CEO KRC ventures"}  /> 

        <Testimony img={reviewImage1} review={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quae inventore molestiae accusamus facere ducimus, magni quidem cumque debitis sed beatae totam, culpa dolore voluptatum incidunt hic quia, mollitia fugit?"} name={"Rita pitsburg"} position={"CEO KRC ventures"}  /> */}
      </div>
    </div>
   );
}
 
export default Testimonials;