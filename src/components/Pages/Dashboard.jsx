import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import "../../App.css"
const Dashboard = () => {
  return (
      <>
     
    <div className="main-dashboard">
      
      <h1 className="pr-3">
      <span >
        <AiFillDashboard  className="pr-1"/>
        Dashboard
      </span>
      <hr className="horizontal-line"/>
      </h1>
    </div>
    
    </>
  );
};

export default Dashboard;
