import React, { useState, useEffect } from "react";
import {
  BsMusicNoteBeamed,
  BsLayersFill,
  BsFileEarmarkLock2,
} from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import { Accordion, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import umg_logo from "../images/umg_logo.png";
import provider_icon from "../images/Group 219.png";
import application_icon from "../images/Group 203@2x.png";
import dashboard_icon from "../images/Group 197@2x.png";
import shopify_icon from "../images/shopify_glyph@2x.png";

import { useLocation } from "react-router-dom";
import "../../App.css";
// import "./Sidebar.css"
// import Subbar from "./Subbar"
import classNames from "classnames";
function SideBar() {
  const location = useLocation();
  useEffect(() => {
    RouterFun(location.pathname);
  }, [location]);
  const [selectedSection, setSelectedSection] = useState("0");
  const RouterFun = (path) => {
    if (path === "/dashboard") {
      setSelectedSection("0");
    }
    if (path === "/applications") {
      setSelectedSection("1");
    }
    if (path === "/shopify") {
      setSelectedSection("2");
    }
    if (path === "/authenticationproviders") {
      setSelectedSection("3");
    }
    if (path === "/providers") {
      setSelectedSection("4");
    }

    if (path === "/applications/add") {
      setSelectedSection("1");
    }
    if (path === "/shopify/add") {
      setSelectedSection("2");
    }
    if (path === "/authenticationproviders/add") {
      setSelectedSection("3");
    }
    if (path === "/providers/add") {
      setSelectedSection("4");
    }
    if (path === "/applications/viewall") {
      setSelectedSection("1");
    }
    if (path === "/shopify/viewall") {
      setSelectedSection("2");
    }
    if (path === "/authenticationproviders/viewall") {
      setSelectedSection("3");
    }
    if (path === "/providers/viewall") {
      setSelectedSection("4");
    }
  };

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-header">
          <span color="info" style={{ color: "black" }}>
            &times;
          </span>

          <img src={umg_logo} className="sizeoflogo" />
        </div>
        <div className="side-menu">
          <Accordion className="bsPrefix" activeKey={selectedSection}>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="dashboardtext pt-3 ">
                <Link to="/dashboard">
                  <img src={dashboard_icon} className="sizeoflshopify mr-4 " />
                  Dashboard
                </Link>
              </Accordion.Header>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header className="dashboardtext accordionbody1 ">
                <Link to="/applications">
                  <img
                    src={application_icon}
                    className="sizeoflshopify mr-4 "
                  />
                  Applications
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1">
                <Link to="/applications" className="navtext boldtext">All Applications</Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/applications/add" className="navtext">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header className="dashboardtext accordionbody1">
                <Link to="/shopify" className="ml-3">
                  <img src={shopify_icon} className="sizeoflshopify mr-4" />
                  Shopify Stores
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1 ">
                <Link to="/shopify"  className="navtext">All Shopify Stores</Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/shopify/add"  className="navtext">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="dashboardtext accordionbody1">
                <img
                  src={provider_icon}
                  className=" sizeoflshopify ml-2 mr-3"
                />
                <Link to="/authenticationproviders">
                  Authentication Providers
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1 ">
                <Link to="/authenticationproviders"  className="navtext">
                  All Authentication Providers
                </Link>
              </Accordion.Body>
              <Accordion.Body className="navitem ">
                <Link to="/authenticationproviders/add"  className="navtext">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header className="dashboardtext accordionbody1">
                <Link to="/providers" className="mr-5">
                  <img src={provider_icon} className="sizeoflshopify mr-3" />
                  Providers
                </Link>
              </Accordion.Header>

              <Accordion.Body className="navitem">
                <Link to="/providers"  className="navtext">All Providers</Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/providers/add"  className="navtext">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default SideBar;
