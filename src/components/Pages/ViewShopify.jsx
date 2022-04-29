import React from 'react'
import { Form } from 'react-bootstrap'
import shopify_icon from '../images/shopify_glyph@2x.png'
function ViewShopify() {
  return (
    <div className="main-dashboard">
    <h1 className="pr-3">
      <img src={shopify_icon} className="sizeofapp mr-4" />
      View Shopify Stores
    </h1>
    <hr style={{ border: "1px solid grey" }} />

    <div className="pt-3">
      <Form>
        <Form.Group>
          <Form.Label className="textspace1">Name</Form.Label>
          <Form.Text>Store Name</Form.Text>
          <hr />
          <Form.Label className="textspace1">ID</Form.Label>
          <Form.Text>1</Form.Text>
          <hr />
          <Form.Label className="textspace1">Secret</Form.Label>
          <Form.Text>10342</Form.Text>
          <hr/>
        </Form.Group>
      </Form>
    </div>
  </div>
  )
}

export default ViewShopify