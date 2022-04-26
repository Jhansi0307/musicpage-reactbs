import React from "react";
import providers_icon from "../images/Group 219.png";
import { Form, Button } from "react-bootstrap";
function ProvidersAddnew() {
  return (
    
    <div className="shopify-stores">

      <h1 className="pr-3">
        <span>
          <img src={providers_icon} alt="" className="sizeofapp mr-4" />
          Edit Provider
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label className="textspace">
            Name
            <span className="text-muted ml-3"> Enter the Name</span>
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
        <div>
          <Button className="btnsize btnedit" type="submit">
            Cancel
          </Button>
          <Button className="ml-3 btnsize1" variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProvidersAddnew;
