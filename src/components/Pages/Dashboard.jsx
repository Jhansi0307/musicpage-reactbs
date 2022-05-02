import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import "./Dashboard.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
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

        <Container>
          <Row xs={2} md={2} lg={8} style={{ backgroundColor: "white" }}>
            <Col>
              <span style={{ fontSize: "20px" }}>Application-Recent</span>
              <Button
                variant="info"
                href="/applications/viewall"
                style={{ backgroundcolor: "#66D6FF", "margin-left": "200px" }}
              >
                View all
              </Button>
              <hr/>
            </Col>
            <Col>
              <span style={{ fontSize: "20px" }}>Shopify Stores-Recent</span>
              <Button
                variant="info"
                href="/shopify/viewall"
                style={{ backgroundcolor: "#66D6FF", "margin-left": "200px" }}
              >
                View all
              </Button>
              <hr/>
            </Col>
          </Row>
          <Row>
            <Col>
            <Link to="/applications/viewapplications">
                  Application Name
                </Link>
                <Link to="/applications/add">
              <Button className="margintext3">Edit</Button>
              </Link>
              <hr/>
            </Col>
            <Col>
            <Link to="/shopify/viewshopify">Store Name</Link>
            <Link to="/shopify/add">
            <Button
                className="margintext2"
              >
                Edit
              </Button>
              </Link>
              <hr/>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
            <Link to="/applications/viewapplications">
                  Application Name
                </Link>
                <Link to="/applications/add">
              <Button className="margintext3">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/shopify/viewshopify">Store Name</Link>
            <Link to="/shopify/add">
            <Button
                className="margintext2"
              >
                Edit
              </Button>
              </Link>
              <hr/>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
            <Link to="/applications/viewapplications">
                  Application Name
                </Link>
                <Link to="/applications/add">
              <Button className="margintext3">Edit</Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/shopify/viewshopify">Store Name</Link>

            <Link to="/shopify/add">
              <Button
                className="margintext2"
              >
                Edit
              </Button>
              </Link>
              <hr/>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <span style={{ fontSize: "20px" }}>
                Authentication Providers-Recent
              </span>
              <Button
                variant="info"
                href="/authenticationproviders/viewall"
                style={{ backgroundcolor: "#66D6FF", "margin-left": "85px" }}
              >
                View all
              </Button>
              <hr/>
            </Col>
            <Col>
              <span style={{ fontSize: "20px" }}>Providers-Recent</span>
              <Button
                variant="info"
                href="/providers/viewall"
                style={{ backgroundcolor: "#66D6FF", "margin-left": "245px" }}
              >
                View all
              </Button>
              <hr/>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col>
            <Link to="/authenticationproviders/viewauthentication">
                  Authentication Provider Name
                </Link>

                <Link to="/authenticationproviders/add">
              <Button
                 className="authentext"
              >

                Edit
              </Button>
              </Link>
              <hr/>
            </Col>
            <Col>
            <Link to="/providers/viewproviders">Provider Name</Link>

              <Link to="/providers/add">
                
               
                <Button
                className="providertext"
                >
                  Edit
                </Button>
                </Link>
              <hr/>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
            <Link to="/authenticationproviders/viewauthentication">
                  Authentication Provider Name
                </Link>
                <Link to="/authenticationproviders/add">
              <Button
                 className="authentext"
              >

                Edit
              </Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/providers/viewproviders">Provider Name</Link>

              <Link to="/providers/add">
                
               
              <Button
              className="providertext"
              >
                Edit
              </Button>
              </Link>
              <hr/>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
            <Col>
            <Link to="/authenticationproviders/viewauthentication">
                  Authentication Provider Name
                </Link>
                <Link to="/authenticationproviders/add">
              <Button
                 className="authentext"
              >
               Edit
              </Button>
              </Link>
              <hr />
            </Col>
            <Col>
            <Link to="/providers/viewproviders">Provider Name</Link>

              <Link to="/providers/add">
                
               
              <Button
              className="providertext"
              >
                Edit
              </Button>
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
