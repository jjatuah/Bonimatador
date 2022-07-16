import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./containers/banner/Banner";
// import { bannerData } from "./containers/banner/bannerData";

 

const App = () => {
  return ( 
    <div className="App">
      <Navbar/>
      <Banner />
    </div>
   );
}
 
export default App;