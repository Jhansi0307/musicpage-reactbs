import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import shopify_icon from "../images/shopify_glyph@2x.png";

import axios from "axios";
function ViewShopify() {
  const params = useParams();
  const [shopify, setShopify] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/getshopify/${params.viewshopify}`)
      .then((response) => {
        setShopify(response.data);
        console.log(response.data);
      });
  }, []);
  if (!shopify) return null;

  return (
    <div className="main-dashboard">
      <h1 className="pr-3">
        <img src={shopify_icon} className="sizeofapp mr-4" />
        View Shopify Stores
      </h1>
      <hr style={{ border: "1px solid grey" }} />

      <div className="pt-3">
        <Container>
          <Row xs={2} md={2} lg={8} style={{ backgroundColor: "white" }}>
            <Col>
              <div className="textspace1">Name</div>
              <div>{shopify.name}</div>
            </Col>
            <hr />
            <Col>
              <div className="textspace1">ID</div>
              <div>{shopify._id}</div>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <div className="textspace1">Secret</div>
              <div> {shopify.secret}</div>

              <hr style={{color: 'black'}}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default ViewShopify;
