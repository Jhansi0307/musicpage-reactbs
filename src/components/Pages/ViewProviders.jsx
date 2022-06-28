import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import provider_icon from "../images/Group 203@2x.png";
import axios from "axios";
import { useParams } from "react-router-dom";
function ViewProviders(props) {
  
  const params = useParams();
  const [state1, setState] = useState(null);
  useEffect(() => {
    axios
      .get(`https://umusic-app.herokuapp.com/get/${params.viewproviders}`)
      .then((response) => {
        setState(response.data);
        console.log(response.data);
      });
  }, []);
  if (!state1) return null;
  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3">
          <img src={provider_icon} className="sizeofapp mr-4" />
          View Providers
        </h1>
        <hr style={{ border: "1px solid grey" }} />

        <div className="pt-3">
          <Container>
            <Row xs={2} md={2} lg={8} style={{ backgroundColor: "white" }}>
              <Col>
                <div className="textspace1">Name</div>
                <div>{state1.name}</div>
              </Col>
              <hr />

              <Col>
                <div className="textspace1">ID</div>
                <div>{state1._id}</div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <div className="textspace1">ProviderID</div>
                <div> {state1.providerid}</div>

                <hr />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ViewProviders;
