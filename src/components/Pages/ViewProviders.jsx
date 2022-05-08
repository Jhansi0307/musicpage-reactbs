import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import provider_icon from "../images/Group 203@2x.png";
import axios from "axios";
import { useLocation } from "react-router-dom";
function ViewProviders(props) {
  const { state } = useLocation(); //in viewprovider use this concept

  // console.log(state);
  // console.log(props);
  const [state1, setState] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/get/${state}`).then((response) => {
      setState(response.data);
      console.log(response.data);
    });
  }, []);
  // console.log(state);
  if (!state1) return null;

  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3">
          <img src={provider_icon} className="sizeofapp mr-4" />
          View Providers
        </h1>
        <hr style={{ border: "1px solid grey" }} />

        <div className="pt-3">
          <Form>
            <Form.Group>
              <Form.Label className="textspace1">Name</Form.Label>
              <Form.Text>{state1.name}</Form.Text>
              <hr />
              <Form.Label className="textspace1">ID</Form.Label>
              <Form.Text>{state1.id}</Form.Text>
              <Form.Label className="textspace1">Provider ID</Form.Label>

              <Form.Text>{state1.providerid}</Form.Text>

              {/* <Form.Text>{e.providerid}</Form.Text> */}
            </Form.Group>
          </Form>
          <hr />
        </div>
      </div>
    </>
  );
}

export default ViewProviders;
