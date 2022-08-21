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
import Footer from "./components/footer/Footer";
import Rentals from "./pages/rentals/Rentals";
import RealEstate from "./pages/real estate/RealEstate";
import Supply from "./pages/supply/Supply";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route} from "react-router-dom";



 

const App = () => {
  return ( 
    <div className="App">
      <Routes>
        <Route path="/" exact element = {<Homepage />} />
        <Route path="/realestate"  element = {<RealEstate />} />
        <Route path="/rentals"  element = {<Rentals />} />
        <Route path="/supply"  element = {<Supply />} />
      </Routes>
      <Footer />
    </div>
   );
}
 
export default App;