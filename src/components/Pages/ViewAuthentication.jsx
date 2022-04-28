import React from 'react'
import { Form } from 'react-bootstrap'
import provider_icon from "../images/Group 219.png"
function ViewAuthentication() {
  return (
    <div className="main-dashboard">
    <h1 className="pr-3">
      <img src={provider_icon} className="sizeofapp mr-4" />
      View Authentication Provider
    </h1>
    <hr style={{ border: "1px solid grey" }} />

    <div className="pt-3">
      <Form>
      <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Text>Application Name</Form.Text>
              <hr />
              <Form.Label>ID</Form.Label>
              <Form.Text>1</Form.Text>
              <hr />
              <Form.Label>Provider ID</Form.Label>
              <Form.Text>10342</Form.Text>
              <Form.Label>Client ID</Form.Label>
              <Form.Text>8892</Form.Text>
              <hr />
              <Form.Label>Client Secret</Form.Label>
              <Form.Text>8892</Form.Text>
              <hr />
              <Form.Label>Application IDs</Form.Label>
              <Form.Text>882</Form.Text>
              <hr />
              <Form.Label>Is Global</Form.Label>
              <Form.Text>True</Form.Text>
              <hr/>
              <Form.Label>State</Form.Label>
              <Form.Text>active</Form.Text>
              <hr />
            </Form.Group>
          </Form>
      </Form>
    </div>
  </div>
  )
}

export default ViewAuthentication