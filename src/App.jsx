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
import Testimonials from "./containers/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Rentals from "./pages/rentals/Rentals";
import RealEstate from "./pages/real estate/RealEstate";
import Supply from "./pages/supply/Supply";


 

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
      <Rentals />
      <RealEstate />
      <Supply />
      <Footer />
    </div>
   );
}
 
export default App;