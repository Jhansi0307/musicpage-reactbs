import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import "./Dashboard.css";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import dashb_icon from "../images/Group 197@2x.png";
const Dashboard = () => {
  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3 pb-2  ">
          <span>
            <img src={dashb_icon} className="sizeoflo mr-4" />
            Dashboard
          </span>
          <hr style={{ border: "1px solid grey" }} />
        </h1>
        <div className="p-3">
          <Row>
            <Col>
              <span className="textsize">Applications-Recent</span>
              <Link to="/applications">
                <Button className="margintext">View All</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <span className="textsize"> Shopify Stores-Recent</span>
              <Link to="/shopify">
                <Button className="margintextshopify"> View All</Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/applications/viewapplications">
              Application Name
              </Link>
              
      
              <Link to="/applications/addnew">
                <Button className="margintext1">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/shopify/viewshopify">
              Store Name
              </Link>
              <Link to="/shopify/addnew">
                    <Button className="margintext2">Edit</Button>
                  </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
           
            <Link to="/applications/viewapplications">
              Application Name
              </Link>
              <Link to="/applications/addnew">
                <Button className="margintext1">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/shopify/viewshopify">
              Store Name
              </Link>
              <Link to="/shopify/addnew">
                    <Button className="margintext2">Edit</Button>
                  </Link>
              <hr />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
            <Link to="/applications/viewapplications">
              Application Name
              </Link>
              <Link to="/applications/addnew">
                <Button className="margintext1">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/shopify/viewshopify">
              Store Name
              </Link>
              <Link to="/shopify/addnew">
                    <Button className="margintext2">Edit</Button>
                  </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="textsize">Authentication Providers-Recent</span>
              <Link to="/authenticationproviders">
                <Button className="authentext">View All</Button>
              </Link>
              <hr />
            </Col>
            <Col>
              <span className="textsize">Providers-Recent</span>
              <Link to="/providers">
                <Button className="providertext"> View All</Button>
              </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/authenticationproviders/viewauthentication">
              Authentication Provider Name</Link>
              <Link to="/authenticationproviders/addnew">
                <Button className="margintext3">Edit</Button>
                </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/providers/viewproviders">
              Provider Name
              </Link>
              <Link to="/providers/addnew">
                    <Button className="margintext4">Edit</Button>
                  </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/authenticationproviders/viewauthentication">
              Authentication Provider Name</Link>
              <Link to="/authenticationproviders/addnew">
                <Button className="margintext3">Edit</Button>
                </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/providers/viewproviders">
              Provider Name
              </Link>
              <Link to="/providers/addnew">
                    <Button className="margintext4">Edit</Button>
                  </Link>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/authenticationproviders/viewauthentication">
              Authentication Provider Name</Link>
              <Link to="/authenticationproviders/addnew">
                <Button className="margintext3">Edit</Button>
                </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/providers/viewproviders">
              Provider Name
              </Link>
              <Link to="/providers/addnew">
                    <Button className="margintext4">Edit</Button>
                  </Link>
              <hr />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
