import React from 'react';
import "./Homepage.css";
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../containers/banner/Banner';
import About from '../../containers/about/About';
import Value from '../../containers/value/Value';
import Services from '../../containers/services/Services';
import FeaturedProperties from '../../containers/featured properties/FeaturedProperties';
import Contact from '../../components/contact/Contact';
import Testimonials from '../../containers/testimonials/Testimonials';


const Homepage = () => {
  return ( 
    <div className="homepage">
      <Navbar />
      <Banner />
      <About />
      <Value />
      <Services />
      <FeaturedProperties />
      <Testimonials />
      <Contact />
    </div>
   );
}
 
export default Homepage;