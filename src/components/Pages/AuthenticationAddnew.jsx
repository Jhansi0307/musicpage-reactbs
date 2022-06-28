import React, { useState } from "react";
import provider_icon from "../images/Group 219.png";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function AuthenticationAddnew() {
  const params = useParams();
  const navigation = useNavigate();
  const [authent, setAuthent] = useState({
    name: "",
    providerid: "",
    authentid: "",
    clientid: "",
    clientsecret: "",
    global: "",
    state: "",
  });

  const nameHandler = (event) => {
    setAuthent((e) => {
      return { ...e, name: event.target.value };
    });
  };
  const providerHandler = (event) => {
    setAuthent((e) => {
      return { ...e, providerid: event.target.value };
    });
  };
  const clientHandler = (event) => {
    setAuthent((e) => {
      return { ...e, clientid: event.target.value };
    });
  };

  const clientsecretHandler = (event) => {
    setAuthent((e) => {
      return { ...e, clientsecret: event.target.value };
    });
  };

  const authentidHandler = (event) => {
    setAuthent((e) => {
      return { ...e, authentid: event.target.value };
    });
  };
  const globalHandler = (event) => {
    setAuthent((e) => {
      return { ...e, global: event.target.value };
    });
  };
  const stateHandler = (event) => {
    setAuthent((e) => {
      return { ...e, state: event.target.value };
    });
  };
  const onSubmitauthent = async (e) => {
    e.preventDefault();
    console.log(authent);
    try {
      const response = await axios.post(
        "https://umusic-app.herokuapp.com/postauthent",
        authent
      );
      if (response.data) {
        console.log("Data added successfully");
      }
      console.log(response.data);
    } catch (err) {
      console.log("data not posted");
    }
    navigation("/authenticationproviders");
  };

  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={provider_icon} className="sizeofapp mr-4" />
          Add/Edit Authentication Provider
        </span>
        <hr style={{ border: "1px solid grey", marginBottom: -20 }} />
      </h2>
      <div className="editapp">
        <Form>
          <Form.Group className="mb-1">
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
              Provider ID
              <span className="text-muted ml-3"> Enter the Provider ID</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={providerHandler}
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
            <Form.Label className="textspace">
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
              Application IDs
              <span className="text-muted ml-3"> Enter the application ID</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              onChange={authentidHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="textspace">
              Is Global
              <span className="text-muted ml-3"> Enter the State</span>
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <div className="textspace">
              <Form.Check
                inline
                label="True"
                value="true"
                type="radio"
                name="global"
                onChange={globalHandler}
              />
              <Form.Check
                inline
                label="False"
                value="false"
                type="radio"
                name="global"
                onChange={globalHandler}
              />
            </div>
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
            <Link to="/authenticationproviders">
              <Button className="btnprops1">Cancel</Button>
            </Link>

            <button
              className="ml-3 mr-5 btnsubmit"
              variant="info"
              onClick={onSubmitauthent}
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default AuthenticationAddnew;
