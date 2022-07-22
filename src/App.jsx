import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./containers/banner/Banner";
// import { bannerData } from "./containers/banner/bannerData"; 
import About from "./containers/about/About";
import Value from "./containers/value/Value";
import Services from "./containers/services/Services";
import FeaturedProperties from "./containers/featured properties/FeaturedProperties";
import Contact from "./components/contact/Contact";
import Testimonials from "./containers/testimonials/Testimonials";

 

const App = () => {
  return ( 
    <div className="App">
      <Navbar/>
      <Banner />
      <About />
      <Value />
      <Services />
      <FeaturedProperties />
      <Contact />
      <Testimonials />
    </div>
   );
}
 
export default App;