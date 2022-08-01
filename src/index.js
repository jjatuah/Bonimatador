import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


ReactDOM.render(
  <div>
    <Router>
      
        <App />
      
    </Router>
  </div>, document.getElementById("root"));



