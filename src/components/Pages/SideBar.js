import React from "react";
import {
  BsMusicNoteBeamed,
  BsLayersFill,
  BsFileEarmarkLock2,
} from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import {
  NavLink,
  Nav,
  NavItem,
  Dropdown,
  Accordion,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import umg_logo from "../images/umg_logo.png";
import provider_icon from "../images/Group 219.png";
import application_icon from "../images/Group 203@2x.png";
import dashboard_icon from "../images/Group 197@2x.png";
import shopify_icon from "../images/shopify_glyph@2x.png";
import "../../App.css";
// import "./Sidebar.css"
// import Subbar from "./Subbar"
import classNames from "classnames";
function SideBar() {
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
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="dashboardtext pt-3 ">
                
                <img src={dashboard_icon} className="sizeoflshopify mr-4 " />
                <Link to="/dashboard" className="mr-2">
                  Dashboard
                </Link>

              </Accordion.Header>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="dashboardtext pt-1">
                <img src={application_icon} className="sizeoflshopify mr-4" />
                <Link to="/applications" className="mr-2">
                  Applications
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1">
                <Link to="/applications">All Applications</Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/applications/addnew">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="dashboardtext pt-1">
                <img src={shopify_icon} className="sizeoflshopify mr-4 ml-1" />
                <Link to="/shopify" className="ml-1">
                  Shopify Stores
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1">
                <Link to="/shopify">All Shopify Stores</Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/shopify/addnew">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="dashboardtext pt-1 ">
                <img src={provider_icon} className="sizeoflshopify mr-2" />
                <Link to="/authenticationproviders">
                  Authentication Providers
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1">
                <Link to="/authenticationproviders">
                  All Authentication Providers
                </Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/authenticationproviders/addnew">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header className="dashboardtext pt-1">
                <img src={provider_icon} className="sizeoflshopify mr-4" />
                <Link to="/providers" className="mr-5">
                  {" "}
                  Providers
                </Link>
              </Accordion.Header>
              <Accordion.Body className="navitem navitem1">
                <Link to="/providers">All Providers</Link>
              </Accordion.Body>
              <Accordion.Body className="navitem">
                <Link to="/providers/addnew">Add New</Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
      path: "home",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
