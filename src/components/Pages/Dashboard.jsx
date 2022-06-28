import React, { useEffect, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import "./Dashboard.css";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import dashb_icon from "../images/Group 197@2x.png";
import axios from "axios";
const Dashboard = () => {
  const navigate = useNavigate();
  const [appvalue, setAppvalue] = useState([]);
  const [shopify, setShopify] = useState([]);
  const [authent, setAuthent] = useState([]);
  const [provider, setProvider] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/getapp/3/0").then((response) => {
      setAppvalue(response.data.value);
    });
    axios.get("http://localhost:8000/getshopify/3/0").then((response) => {
      setShopify(response.data.value);
    });
    axios.get("http://localhost:8000/getauthent/3/0").then((response) => {
      setAuthent(response.data.value);
    });
    axios.get("http://localhost:8000/get/3/0").then((response) => {
      setProvider(response.data.value);
    });
  }, []);

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
              <div className="row">
                <div className="col">
                  <span style={{ fontSize: "20px" }}>Application-Recent</span>
                </div>
                <div className="col">
                  <Link to="/applications/viewall">
                    <Button variant="info" className="viewall">
                      View all
                    </Button>
                  </Link>
                </div>
              </div>
              <hr />
            </Col>
            <Col>
              <div className="row">
                <div className="col">
                  <span style={{ fontSize: "20px" }}>
                    Shopify Stores-Recent
                  </span>
                </div>
                <div className="col">
                  <Link to="/shopify/viewall">
                    <Button variant="info" className="viewall">
                      View all
                    </Button>
                  </Link>
                </div>
              </div>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              {appvalue
                .filter((e, index) => index < 3)
                .map((e) => (
                  <>
                    <div className="row">
                      <div
                        className="col"
                        onClick={(ev) => {
                          navigate(`/applications/viewall`);
                        }}
                      >
                        {e.name}
                      </div>

                      <div
                        className="col"
                        onClick={(ev) => {
                          navigate(`/applications/edit/${e._id}`);
                        }}
                      >
                        <Button className="margintext3">Edit</Button>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
            </Col>
            <Col>
              {shopify
                .filter((e, index) => index < 3)
                .map((e) => (
                  <>
                    <div className="row">
                      <div
                        className="col"
                        onClick={(event) => {
                          navigate(`/shopify/viewall`);
                        }}
                      >
                        {e.name}
                      </div>
                      <div
                        className="col"
                        onClick={(event) => {
                          navigate(`/shopify/edit/${e._id}`);
                        }}
                      >
                        <Button className="margintext2">Edit</Button>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col>
              <>
                {/* <div className="row">
                  <div className="col"> */}
                <span style={{ fontSize: "19px" }}>
                  Authentication Providers-Recent
                </span>
                {/* </div> */}
                {/* <div className="col"> */}
                <Link to="/authenticationproviders/viewall">
                  <Button variant="info" className="viewallauthen">
                    View all
                  </Button>
                </Link>
                {/* </div>
                </div> */}
                <hr />
              </>
            </Col>
            <Col>
              <>
                <div className="row">
                  <div className="col">
                    <span style={{ fontSize: "20px" }}>Providers-Recent</span>
                  </div>
                  <div className="col">
                    <Link to="/providers/viewall">
                      <Button variant="info" className="viewallprovider">
                        View all
                      </Button>
                    </Link>
                  </div>
                </div>
                <hr />
              </>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "white" }}>
            <Col>
              {authent
                .filter((e, index) => index < 3)
                .map((e) => (
                  <>
                    <div className="row">
                      <div
                        className="col"
                        onClick={() => {
                          navigate(`/authenticationproviders/viewall`);
                        }}
                      >
                        {e.name}
                      </div>
                      <div
                        className="col"
                        onClick={() => {
                          navigate(`/authenticationproviders/edit/${e._id}`);
                        }}
                      >
                        <Button className="margintext3">Edit</Button>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
            </Col>
            <Col>
              {provider
                .filter((e, index) => index < 3)
                .map((e, index) => (
                  <>
                    <div className="row">
                      <div
                        className="col"
                        onClick={() => {
                          navigate(`/providers/viewall`);
                        }}
                      >
                        {e.name}
                      </div>
                      <div
                        className="col"
                        onClick={() => {
                          navigate(`/providers/edit/${e._id}`);
                        }}
                      >
                        <Button className="providertext">Edit</Button>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Dashboard;
