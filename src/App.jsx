import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./containers/banner/Banner";
// import { bannerData } from "./containers/banner/bannerData";
import About from "./containers/about/About";

 

const App = () => {
  return ( 
    <div className="App">
      <Navbar/>
      <Banner />
      <About />
    </div>
   );
}
 
export default App;