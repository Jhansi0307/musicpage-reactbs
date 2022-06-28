import React, { useState } from "react";
import app_icon from "../images/Group 203@2x.png";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function ApplicationAddnew() {
  
  const navigate = useNavigate();
  const [app, setApp] = useState({
    name: "",
    clientid: "",
    clientsecret: "",
    redirecturl: "",
    state: "",
  });


  

  const nameHandler = (event) => {

    setApp((e) => {
      return { ...e, name: event.target.value };
    });
  };

  const clientHandler = (event) => {
    setApp((e) => {
      return { ...e, clientid: event.target.value };
    });
  };

  const clientsecretHandler = (event) => {
    setApp((e) => {
      return { ...e, clientsecret: event.target.value };
    });
  };

  const redirectHandler = (event) => {
    setApp((e) => {
      return { ...e, redirecturl: event.target.value };
    });
  };
  const stateHandler = (event) => {
    setApp((e) => {
      return { ...e, state: event.target.value };
    });
  };
  const onSubmitApp = async (e) => {
    e.preventDefault();
    console.log(app);
    try {
      const response = await axios.post("http://localhost:8000/postapp", app);
      if (response.data) {
        console.log("Data added successfully");
      }
      console.log(response.data);
    } catch (err) {
      console.log("data not posted");
    }
    navigate("/applications");
  };

  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={app_icon} className="sizeofapp mr-4" />
          Add Applications
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h2>

      <div className="editapp">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="textspace">
              Name
              <span className="text-muted ml-3"> Enter the name</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={nameHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Client ID
              <span className="text-muted ml-3"> Enter the Client ID</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={clientHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label
              className="textspace"
              // name="clientsecret"
            >
              Client Secret
              <span className="text-muted ml-3"> Enter the Client Secret</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={clientsecretHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Redirect URLs
              <span className="text-muted ml-3"> Enter the Redirect URLs</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={redirectHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              State
              <span className="text-muted ml-3"> Enter the State</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={stateHandler}
            />
          </Form.Group>
          <div>
            <Link to="/applications">
              <Button className="btnprops1">Cancel</Button>
            </Link>

            <button className="ml-3 btnsubmit" onClick={onSubmitApp}>
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ApplicationAddnew;
