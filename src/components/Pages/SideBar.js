import React from "react";
import {
  BsMusicNoteBeamed,
  BsLayersFill,
  BsFileEarmarkLock2,
} from "react-icons/bs";
import { AiFillDashboard } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import { NavLink, Nav, NavItem, Dropdown, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

// import Subbar from "./Subbar"
import classNames from "classnames";
function SideBar() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classNames("sidebar")}>
        <div className="sidebar-header">
          <span color="info" style={{ color: "black" }}>
            &times;
          </span>
          <h3>
            <BsMusicNoteBeamed className="margintext" />
            music
          </h3>
        </div>
        <div className="side-menu">
          <Nav vertical="true" className="list-unstyled pb-3">
            <NavItem>
              <Accordion >
                <Accordion.Item eventKey="0" >
                  <Accordion.Header className="dashboardtext">
                    
                    <AiFillDashboard className="mr-2" />
                    <Link to="/dashboard" >Dashboard</Link>
                  </Accordion.Header>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header
                  className="dashboardtext"
                  >
                    
                    <BsLayersFill className="mr-2" />
                    Applications
                  </Accordion.Header>
                  <Accordion.Body className="navitem">
                    <Link to="/application">All Applications</Link>
                  </Accordion.Body>
                  <Accordion.Body className="navitem">
                    <Link to="/application/addnew">Add New</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="dashboardtext">
                    <RiShoppingBagFill />
                    Shopify Stores
                  </Accordion.Header>
                  <Accordion.Body className="navitem">
                    <Link to="/shopify">All Shopify Stores</Link>
                  </Accordion.Body>
                  <Accordion.Body className="navitem">
                    <Link to="/dashboard">Add New</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header className="dashboardtext">
                    <BsFileEarmarkLock2 />
                    Authentication Providers
                  </Accordion.Header>
                  <Accordion.Body className="navitem">
                    <Link to="/authenticationproviders">
                      All Authentication Providers
                    </Link>
                  </Accordion.Body>
                  <Accordion.Body className="navitem">
                    <Link to="/dashboard">Add New</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="dashboardtext">
                    <BsFileEarmarkLock2 />
                    Providers
                  </Accordion.Header>
                  <Accordion.Body className="navitem">
                    <Link to="/providers">All Providers</Link>
                  </Accordion.Body>
                  <Accordion.Body className="navitem">
                    <Link to="/dashboard">Add New</Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </NavItem>

            {/* <NavItem>
              <NavLink to={"/appprovider"}>
                <BsFileEarmarkLock2
                  icon={BsFileEarmarkLock2}
                  className="mr-2"
                />
                Authentication Providers
              </NavLink>
            </NavItem> */}
            {/* <Subbar items={submenus[3]} /> */}
            {/* <NavItem>
              <NavLink to={"/providers"}>
                <BsFileEarmarkLock2
                  icon={BsFileEarmarkLock2}
                  className="mr-2"
                />
                Providers
              </NavLink>
            </NavItem> */}
          </Nav>
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
