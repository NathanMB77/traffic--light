//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Home2 from "./component/home2.jsx";




//render your react application
ReactDOM.render(<Home2 />, document.querySelector("#app"));
