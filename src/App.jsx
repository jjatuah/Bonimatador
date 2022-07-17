import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./containers/banner/Banner";
// import { bannerData } from "./containers/banner/bannerData";
import About from "./containers/about/About";
import Value from "./containers/value/Value";

 

const App = () => {
  return ( 
    <div className="App">
      <Navbar/>
      <Banner />
      <About />
      <Value />
    </div>
   );
}
 
export default App;