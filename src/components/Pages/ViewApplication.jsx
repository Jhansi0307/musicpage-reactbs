import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import app_icon from "../images/Group 203@2x.png";
import axios from "axios";
function ViewApplication() {
  const params = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    axios
      .get(`https://umusic-app.herokuapp.com/getapp/${params.viewapplications}`)
      .then((response) => {
        setState(response.data);
        console.log(response.data);
      });
  }, []);
  if (!state) return null;
  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3">
          <img src={app_icon} className="sizeofapp mr-4" />
          View Applications
        </h1>
        <hr style={{ border: "1px solid grey" }} />

        <div className="pt-3">
          <Container>
            <Row xs={2} md={2} lg={8} style={{ backgroundColor: "white" }}>
              <Col>
                <div className="textspace1">Name</div>
                <div>{state.name}</div>
              </Col>
              <hr />

              <Col>
                <div className="textspace1">ID</div>
                <div>{state._id}</div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="textspace1">ClientID</div>
                <div>{state.clientid}</div>
              </Col>
              <hr />

              <Col>
                <div className="textspace1">Client Secret</div>
                <div>{state.clientsecret}</div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="textspace1">Redirect URLs</div>
                <div>{state.redirecturl}</div>
              </Col>
              <hr />

              <Col>
                <div className="textspace1">State</div>
                <div>{state.state}</div>
              </Col>
            </Row>
            <hr />
          </Container>
        </div>
      </div>
    </>
  );
}

export default ViewApplication;
