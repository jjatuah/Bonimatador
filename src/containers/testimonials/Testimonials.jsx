import React,{ useState, useEffect, useRef } from 'react';
import "./Testimonials.css";
import bgImage from "../../assets/testimonyBackground.jpg"; 
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';
import { testimonyData } from './testimonyData';
  



const Testimonials = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = testimonyData.length;

  const timeout = useRef(null)

  useEffect(
    () => {
      const nextSlider = () => {
        setCurrentSlide(currentSlide => (currentSlide === slideLength - 1 ? 0 : currentSlide + 1))
      }

      timeout.current = setTimeout(nextSlider, 10000);

      return function() {
        if (timeout.current) {
          clearTimeout(timeout.current)
        }  
      }
    }, [currentSlide, slideLength]
  )

  

  const nextSlider = () => {

    if (timeout.current) {
      clearTimeout(timeout.current)
    } 

    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }

  const prevSlider = () => {

    if (timeout.current) {
      clearTimeout(timeout.current)
    } 
    
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  if(!Array.isArray(testimonyData) || testimonyData.length <= 0) {
    return null
  }

  return ( 
    <div className="testimonials">
      <div className="testimonialsbackground">
        <img src={bgImage} alt="" />
      </div>
      <div className="testimonyContainer">

        <h2>What are our customers saying ?</h2>
        {
          testimonyData.map((slide, index) => {
            return (
              <>
                {
                  index === currentSlide && (
                    <div className="testimony">
                        <img src={slide.image} alt="" />
                        <div className="testimonyContent">
                          <p>{slide.testimony}</p>
                          <h4>{slide.name}</h4>
                          <h5 >{slide.position}</h5>
                        </div>
                        <KeyboardArrowLeftRoundedIcon style={{fontSize: "45px"}} className='left' onClick={prevSlider}/>
                        <KeyboardArrowRightRoundedIcon style={{fontSize: "45px"}} 
                        className='right' onClick={nextSlider}/>
                    </div>
                  )
                }
              </>
            )
          })
        }
      </div>
    </div>
   );
}
 
export default Testimonials;