import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import SideBar from "./components/Pages/SideBar";
import Content from "./components/Routers/Content";
import "./App.css";

const App = () => {
  

  return (
    <Router>
      <div className="App wrapper">
        <SideBar/>
        <Content/>
      </div>
    </Router>
  );
};

export default App;
