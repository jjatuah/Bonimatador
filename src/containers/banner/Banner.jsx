import React,{ useState, useEffect, useRef } from 'react';
import "./Banner.css";
import { bannerData } from './bannerData';
import KeyboardArrowLeftRoundedIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@material-ui/icons/KeyboardArrowRightRounded';



const Banner = () => {

  const [current, setCurrent] = useState(0);
  const length = bannerData.length;

  const timeout = useRef(null)

  useEffect(
    () => {
      const nextSlide = () => {
        setCurrent(current => (current === length - 1 ? 0 : current + 1))
      }

      timeout.current = setTimeout(nextSlide, 3000);

      return function() {
        if (timeout.current) {
          clearTimeout(timeout.current)
        }  
      }
    }, [current, length]
  )

  

  const nextSlide = () => {

    if (timeout.current) {
      clearTimeout(timeout.current)
    } 

    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevSlide = () => {

    if (timeout.current) {
      clearTimeout(timeout.current)
    } 
    
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray(bannerData) || bannerData.length <= 0) {
    return null
  }


  return ( 
    <div className="banner">
      <div className="bannerWrapper">
      <KeyboardArrowLeftRoundedIcon style={{fontSize: "45px"}} className='leftArrow' onClick={prevSlide}/>
      <KeyboardArrowRightRoundedIcon style={{fontSize: "45px"}} 
       className='rightArrow' onClick={nextSlide}/>
        {
          bannerData.map((slide, index) => {
            return (
              <div className="sliderWrapper">
                {  
                  index === current && (
                    <div className="bannerSlider">
                      <img className='bannerImage' src={slide.image} alt="Real Estate" />
                      <div className="bannerContent">
                        <h1>Let's help you make your dream <br/> home a reality</h1>
                        <a href="#">About Us</a>
                      </div>
                    </div>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
   );
}
 
export default Banner;