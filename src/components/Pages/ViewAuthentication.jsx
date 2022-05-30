import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import provider_icon from "../images/Group 219.png";
function ViewAuthentication() {
  const params = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/getauthent/${params.viewauthentication}`)
      .then((response) => {
        setState(response.data);
        console.log(response.data);
      });
  }, []);

  if (!state) return null;

  return (
    <div className="main-dashboard">
      <h1 className="pr-3">
        <img src={provider_icon} className="sizeofapp mr-4" />
        View Authentication Provider
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
              <div className="textspace1">ProviderID</div>
              <div>{state.providerid}</div>
            </Col>
            <hr />

            <Col>
              <div className="textspace1">Client ID</div>
              <div>{state.clientid}</div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <div className="textspace1">Client Secret</div>
              <div>{state.clientsecret}</div>
            </Col>
            <hr />

            <Col>
              <div className="textspace1">App ID</div>
              <div>{state.authentid}</div>
            </Col>
          </Row>

          <hr />
          <Row>
            <Col>
              <div className="textspace1">Global</div>
              <div>{state.global}</div>
            </Col>
            <hr />

            <Col>
              <div className="textspace1">State</div>
              <div>{state.state}</div>
            </Col>

          </Row>
          <hr/>
        </Container>
      </div>
    </div>
  );
}

export default ViewAuthentication;
