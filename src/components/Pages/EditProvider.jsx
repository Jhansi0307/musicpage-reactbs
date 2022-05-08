import React, { useEffect, useState } from "react";
import providers_icon from "../images/Group 219.png";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import * as yup from "yup";
const initialValues = {
  name: "",
  id: "",
  providerid: "",
};
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  providerid: yup.string().required("ProviderID is required"),
});

function EditProvider(props) {



  const { state } = useLocation();
  const onSubmit = async (value, reset) => {
    try {
      const response = await axios.put(`http://localhost:8000/put/${state}`,value);
      console.log(response);
      if (response.data) {
        Swal.fire("Good!", "Updated Successfully ", "success");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Registered",
      });
    }

console.log(value)
    reset.resetForm();
  };

  //in viewprovider use this concept

  const onchangeName = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const onchangeId = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  };
  const onchangeProviderid = (event) => {
    setProviderid(event.target.value);
    console.log(event.target.value);
  };

  // console.log(state);
  // console.log(props);
  const [state1, setState] = useState(null);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [providerid, setProviderid] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/get/${state}`).then((response) => {
      setState(response.data);
      console.log(response.data);
      setName(response.data.name);
      setId(response.data.id);
      setProviderid(response.data.providerid);
    });
  }, []);
  // console.log(state);
  if (!state1) return null;
  return (
    <div className="main-dashboard">
      <h1 className="pr-3">
        <span>
          <img src={providers_icon} alt="" className="sizeofapp mr-4" />
          Add/Edit Provider
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h1>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group label-container mb-2 ">
            <label htmlFor="name">Name</label>

            <Field
              type="text"
              className="form-control"
              name="name"
              value={name}
              style={{ width: "40rem" }}
              onChange={onchangeName}
            />
            <label htmlFor="name">ID</label>

            <Field
              type="text"
              className="form-control"
              name="id"
              value={id}
              onChange={onchangeId}
              style={{ width: "40rem" }}
            />
          </div>
          <div className="form-group label-container  mb-2">
            <label htmlFor="pid">ProviderID </label>

            <Field
              type="text"
              className="form-control "
              name="providerid"
              value={providerid}
              onChange={onchangeProviderid}
              style={{ width: "40rem" }}
            />
          </div>
          <div className="m-4 text-center btnmargin">
            <Link to="/providers">
              <button className="btnprops1">Cancel</button>
            </Link>
            <button className="ml-3 btnsubmit" type="submit">
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default EditProvider;
