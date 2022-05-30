import React, { useEffect, useState } from "react";
import app_icon from "../images/Group 203@2x.png";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditApplication(props) {
  const params = useParams();
  const navigate = useNavigate();

  const [editApp, setEditApp] = useState({
    name: "",
    clientid: "",
    clientsecret: "",
    redirecturl: "",
    state: "",
  });
  
  console.log(params.edit);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/getapp/${params.edit}`)
      .then((response) => {
        setEditApp(response.data);
        console.log(response.data);
      });
  }, []);

  const nameHandler = (event) => {
    setEditApp((e) => ({
      ...e,
      name: event.target.value,
    }));
  };
  const clientHandler = (event) => {
    setEditApp((e) => ({
      ...e,
      clientid: event.target.value,
    }));
  };

  const clientsecretHandler = (event) => {
    setEditApp((e) => ({
      ...e,
      clientsecret: event.target.value,
    }));
  };

  const redirectHandler = (event) => {
    setEditApp((e) => ({
      ...e,
      redirecturl: event.target.value,
    }));
  };
  const stateHandler = (event) => {
    setEditApp((e) => ({
      ...e,
      state: event.target.value,
    }));
  };
  const onSubmitApp = (event) => {
    event.preventDefault();
    const data = {
      name: editApp.name,
      clientid: editApp.clientid,
      clientsecret: editApp.clientsecret,
      redirecturl: editApp.redirecturl,
      state: editApp.state,
    };
    axios.put(`http://localhost:8000/updateapp/${params.edit}`, data);
    setEditApp({
      name: "",
      clientid: "",
      clientsecret: "",
      redirecturl: "",
      state: "",
    });
    navigate("/applications");
  };

  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={app_icon} className="sizeofapp mr-4" />
          Edit Applications
        </span>
      
      </h2>
      <hr style={{ border: "1px solid grey" }} />

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
              value={editApp.name}
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
              value={editApp.clientid}
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
              value={editApp.clientsecret}
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
              value={editApp.redirecturl}
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
              value={editApp.state}
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

export default EditApplication;
