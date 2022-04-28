import React from "react";
import { Form, Button } from "react-bootstrap";
import shopify_icon from "../images/shopify_glyph@2x.png";
import {Link} from "react-router-dom"
function ShopiftStoresAddnew() {
  return (
    <div className="main-dashboard">
      <h1 className="pr-3">
        <span>
          <img src={shopify_icon} alt="" className="sizeofapp mr-4" />
          Add/Edit Shopify Store
        </span>

        <hr style={{ border: "1px solid grey" }} />
      </h1>
      <Form>
        <Form.Group className="mb-3">
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
            Secret
            <span className="text-muted ml-3"> Enter the Secret</span>
          </Form.Label>
          <Form.Control className="sizeoflabel" type="text" />
        </Form.Group>

        <div>
          <Link to="/shopify">
          <Button className="btnsize btnedit" type="submit">
            Cancel
          </Button>
          </Link>
          <Button className="ml-3 btnsize1" variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ShopiftStoresAddnew;
