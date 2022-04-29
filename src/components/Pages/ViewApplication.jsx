import React from "react";
import { Form } from "react-bootstrap";
import app_icon from "../images/Group 203@2x.png";
function ViewApplication() {
  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3">
          <img src={app_icon} className="sizeofapp mr-4" />
          View Applications
        </h1>
        <hr style={{ border: "1px solid grey" }} />

        <div className="pt-3">
          <Form>
            <Form.Group>
              <Form.Label  className="textspace1">Name</Form.Label>
              <Form.Text>Application Name</Form.Text>
              <hr />
              <Form.Label  className="textspace1">ID</Form.Label>
              <Form.Text>1</Form.Text>
              <hr />
              <Form.Label  className="textspace1">Client ID</Form.Label>
              <Form.Text>10342</Form.Text>
              <hr />
              <Form.Label  className="textspace1">Client Secret</Form.Label>
              <Form.Text>8892</Form.Text>
              <hr />
              <Form.Label  className="textspace1">Redirect URLs</Form.Label>
              <Form.Text>https://www.umusic.com</Form.Text>
              <hr />
              <Form.Label  className="textspace1">State</Form.Label>
              <Form.Text>active</Form.Text>
              <hr />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ViewApplication;
