import React from "react";
import provider_icon from "../images/Group 219.png";
import { Form, Button } from "react-bootstrap";
function AuthenticationAddnew() {
  return (
    <div className="main-dashboard">
      <h1 className="pr-3">
        <span>
          <img src={provider_icon} className="sizeofapp mr-4" />
          Edit Authentication Provider
        </span>
        <hr style={{ border: "1px solid grey" ,marginBottom:-20}} />
      </h1>
      <div className="editapp">
        <Form>
          <Form.Group className="mb-1">
            <Form.Label className="textspace">
              Name
              <span className="text-muted ml-3"> Enter the name</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="textspace">
              Id
              <span className="text-muted ml-3"> Enter the Id</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Provider ID
              <span className="text-muted ml-3"> Enter the Provider ID</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Client ID
              <span className="text-muted ml-3"> Enter the Client ID</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Client Secret
              <span className="text-muted ml-3"> Enter the Client Secret</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Application IDs
              <span className="text-muted ml-3"> Enter the App ID</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="textspace">
              Is Global
              <span className="text-muted ml-3"> Enter the State</span>
            </Form.Label>
          </Form.Group>
          <div className="textspace">
            <Form.Check inline label="True" type="radio" />
            <Form.Check inline label="False" type="radio"/>
          </div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              State
              <span className="text-muted ml-3"> Enter the State</span>
            </Form.Label>
            <Form.Control className="sizeoflabel" type="text" />
          </Form.Group>
          <div>
            <Button className="btnsize btnedit" type="submit">
              Cancel
            </Button>
            <Button
              className="ml-3 mr-5 btnsize1"
              variant="primary"
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AuthenticationAddnew;
