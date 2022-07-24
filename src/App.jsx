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
import Test from "./test";
import Test2 from "./test2";
import Testimonies from "./containers/testimonies/Testimonies";
import Testimony from "./components/testimony/Testimony";
import abc from "./assets/About.jpg"


 

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
      <Testimonies />
    </div>
   );
}
 
export default App;