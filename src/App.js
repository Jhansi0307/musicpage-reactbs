import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Content from "./components/Routers/Content";
import "./App.css";
import SideBar from "./components/Pages/SideBar";
import Loading from "./components/Pages/Loading";

const App = () => {


  return (
    <Router>
      <div className="App wrapper">
        <SideBar />
        <Content />
        {/* <Loading/> */}
      </div>
    </Router>
  );
};

export default App;
