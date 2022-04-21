import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Applications from "../Pages/Applications";
import Authenticationproviders from "../Pages/Authenticationprovider"
import Topbar from "./Topbar";
import Dashboard from "../Pages/Dashboard";
import Shopify from "../Pages/Shopifystore"
import Providers from "../Pages/Providers";

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    {/* <Topbar toggleSidebar={toggleSidebar} /> */}
  
    <Routes>
    <Route  path="/" element={<Dashboard/>} />
      <Route  path="/dashboard" element={<Dashboard/>} />
      <Route exact path="/application" element={<Applications />} />
     
      <Route exact path="/shopify" element={<Shopify/>} />
      <Route exact path="/authenticationproviders" element={<Authenticationproviders/>}/>
      <Route exact path="/providers" element={<Providers/>}/>
   
    </Routes>
  
  </Container>
);

export default Content;
