import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import "./Dashboard.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import dashb_icon from "../images/Group 197@2x.png";
const Dashboard = () => {
  return (
    <>
      <div className="main-dashboard1">
        <h2 className="pr-3 pb-1  ">
          <span>
            <img src={dashb_icon} className="sizeoflo mr-4" />
            Dashboard
          </span>
        </h2>
        <hr style={{ border: "1px solid grey" }} />

        <Container>
          <Row xs={2} md={2} lg={8} style={{ backgroundColor: "white" }}>
            <Col>
              <span style={{ fontSize: "20px" }}>Application-Recent</span>
              <Link to="/applications/viewall">
                <Button variant="info" className="viewall">
                  View all
                </Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <span style={{ fontSize: "20px" }}>Shopify Stores-Recent</span>
              <Link to="/shopify/viewall">
                <Button variant="info" className="viewall">
                  View all
                </Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/applications/viewapplications">Application Name</Link>
              <Link to="/applications/add">
                <Button className="margintext3">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <Link to="/shopify/viewshopify">Store Name</Link>
              <Link to="/shopify/add">
                <Button className="margintext2">Edit</Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <Link to="/applications/viewapplications">Application Name</Link>
              <Link to="/applications/add">
                <Button className="margintext3">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <Link to="/shopify/viewshopify">Store Name</Link>
              <Link to="/shopify/add">
                <Button className="margintext2">Edit</Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <Link to="/applications/viewapplications">Application Name</Link>
              <Link to="/applications/add">
                <Button className="margintext3">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <Link to="/shopify/viewshopify">Store Name</Link>

              <Link to="/shopify/add">
                <Button className="margintext2">Edit</Button>
              </Link>
              <hr />
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <span style={{ fontSize: "20px" }}>
                Authentication Providers-Recent
              </span>
              <Link to="/authenticationproviders/viewall">
                <Button variant="info" className="viewallauthen">
                  View all
                </Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <span style={{ fontSize: "20px" }}>Providers-Recent</span>
              <Link to="/providers/viewall">
                <Button variant="info" className="viewallprovider">
                  View all
                </Button>
              </Link>
              <hr />
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <Link to="/authenticationproviders/viewauthentication">
                Authentication Provider Name
              </Link>

              <Link to="/authenticationproviders/add">
                <Button className="authentext">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <Link to="/providers/viewproviders">Provider Name</Link>

              <Link to="/providers/add">
                <Button className="providertext">Edit</Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <Link to="/authenticationproviders/viewauthentication">
                Authentication Provider Name
              </Link>
              <Link to="/authenticationproviders/add">
                <Button className="authentext">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <Link to="/providers/viewproviders">Provider Name</Link>

              <Link to="/providers/add">
                <Button className="providertext">Edit</Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <Link to="/authenticationproviders/viewauthentication">
                Authentication Provider Name
              </Link>
              <Link to="/authenticationproviders/add">
                <Button className="authentext">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <Link to="/providers/viewproviders">Provider Name</Link>

              <Link to="/providers/add">
                <Button className="providertext">Edit</Button>
              </Link>
              <hr style={{ width: "482px" }} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
