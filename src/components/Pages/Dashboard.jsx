import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import "./Dashboard.css";
import { Button, Col, Row } from "react-bootstrap";
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
              <Button className="margintext">View All</Button>
              <hr />
            </Col>
            <Col>
              <span className="textsize"> Shopify Stores-Recent</span>

              <Button className="margintextshopify"> View All</Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              Application Name
              <Button className="margintext1">Edit</Button>
              <hr />
            </Col>
            <Col>
              Store Name
              <Button className="margintext2">Edit</Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              Application Name
              <Button className="margintext1">Edit</Button>
              <hr />
            </Col>
            <Col>
              Store Name
              <Button className="margintext2">Edit</Button>
              <hr />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              Application Name
              <Button className="margintext1">Edit</Button>
              <hr />
            </Col>
            <Col>
              Store Name
              <Button className="margintext2">Edit</Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="textsize">Authentication Providers-Recent</span>
              <Button className="authentext">View All</Button>
              <hr />
            </Col>
            <Col>
              <span className="textsize">Providers-Recent</span>

              <Button className="providertext"> View All</Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              Authentication Provider Name
              <Button className="margintext3">Edit</Button>
              <hr />
            </Col>
            <Col>
              Provider Name
              <Button className="margintext4">Edit</Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              Authentication Provider Name
              <Button className="margintext3">Edit</Button>
              <hr />
            </Col>
            <Col>
              Provider Name
              <Button className="margintext4">Edit</Button>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              Authentication Provider Name
              <Button className="margintext3">Edit</Button>
              <hr />
            </Col>
            <Col>
              Provider Name
              <Button className="margintext4">Edit</Button>
              <hr />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
