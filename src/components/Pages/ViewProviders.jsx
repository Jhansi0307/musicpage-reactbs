import React from 'react'
import { Form } from 'react-bootstrap'
import provider_icon from "../images/Group 203@2x.png"
function ViewProviders() {
  return (
    <div className="main-dashboard">
    <h1 className="pr-3">
      <img src={provider_icon} className="sizeofapp mr-4" />
      View Providers
    </h1>
    <hr style={{ border: "1px solid grey" }} />

    <div className="pt-3">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Text>Provider Name</Form.Text>
          <hr />
          <Form.Label>ID</Form.Label>
          <Form.Text>1</Form.Text>
          <hr />
          <Form.Label>Provider ID</Form.Label>
          <Form.Text>10342</Form.Text>
          <hr/>
        </Form.Group>
      </Form>
    </div>
  </div>
  )
}

export default ViewProviders