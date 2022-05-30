import React, { useEffect, useState } from "react";
import provider_icon from "../images/Group 219.png";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditAuthentication() {
  const params = useParams();
  const navigation = useNavigate();
  const [check, setCheck] = useState("True");
  const [authent, setAuthent] = useState({
    name: "",
    providerid: "",
    authentid: "",
    clientid: "",
    clientsecret: "",
    global: "",
    state: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:8000/getauthent/${params.edit}`)
      .then((response) => {
        setAuthent(response.data);
      });
  }, []);
  console.log(authent.global);
  const nameHandler = (event) => {
    setAuthent((e) => ({
      ...e,
      name: event.target.value,
    }));
  };
  const providerHandler = (event) => {
    setAuthent((e) => ({
      ...e,
      providerid: event.target.value,
    }));
  };
  const clientHandler = (event) => {
    setAuthent((e) => ({
      ...e,
      clientid: event.target.value,
    }));
  };

  const clientsecretHandler = (event) => {
    setAuthent((e) => ({
      ...e,
      clientsecret: event.target.value,
    }));
  };

  const authentidHandler = (event) => {
    setAuthent((e) => ({
      ...e,
      authentid: event.target.value,
    }));
  };
  const globalHandler = (event) => {
    if (event.target.value === "true") {
      setAuthent((e) => ({
        ...e,
        global: "false",
      }));
    } else {
      setAuthent((e) => ({
        ...e,
        global: "true",
      }));
    }
  };
  const stateHandler = (event) => {
    setAuthent((e) => ({
      ...e,
      state: event.target.value,
    }));
  };
  const onSubmitAuthent = (event) => {
    event.preventDefault();
    const data = {
      name: authent.name,
      clientid: authent.clientid,
      clientsecret: authent.clientsecret,
      providerid: authent.providerid,
      authentid: authent.authentid,
      global: authent.global,
      state: authent.state,
    };
    axios.put(`http://localhost:8000/updateauthent/${params.edit}`, data);
    setAuthent({
      name: "",
      providerid: "",
      authentid: "",
      clientid: "",
      clientsecret: "",
      global: "",
      state: "",
    });
    navigation("/authenticationproviders");
  };
  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={provider_icon} className="sizeofapp mr-4" />
         Edit Authentication Provider
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
              value={authent.name}
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
              value={authent.providerid}
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
              value={authent.clientid}
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
              value={authent.clientsecret}
              onChange={clientsecretHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              Application IDs
              <span className="text-muted ml-3"> Enter the authent ID</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              value={authent.authentid}
              onChange={authentidHandler}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="textspace">
              Is Global
              <span className="text-muted ml-3"> Enter the State</span>
            </Form.Label>
          </Form.Group>

          <div className="textspace">
            <Form.Group>
              <Form.Check
                inline
                label="True"
                type="radio"
                name="global"
                value={authent.global}
                checked={authent.global === "true"}
                onChange={globalHandler}
              />
              <Form.Check
                inline
                label="False"
                type="radio"
                name="global"
                value={authent.global}
                checked={authent.global === "false"}
                onChange={globalHandler}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label className="textspace">
              State
              <span className="text-muted ml-3"> Enter the State</span>
            </Form.Label>
            <Form.Control
              className="sizeoflabel"
              type="text"
              value={authent.state}
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
              onClick={onSubmitAuthent}
            >
              Save
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EditAuthentication;
