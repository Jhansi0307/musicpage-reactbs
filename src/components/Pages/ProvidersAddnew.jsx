import React from "react";
import providers_icon from "../images/Group 219.png";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import * as yup from "yup";
const initialValues = {
  name: "",
  id:"",
  providerid: "",
};
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  providerid: yup.string().required("ProviderID is required"),
});
function ProvidersAddnew() {
  const onSubmit = async (value, reset) => {
    try {
      const response = await axios.post("http://localhost:8000/post", value);
      console.log(response);
      if (response.data) {
        Swal.fire("Good!", "Successfully Added", "success");
      }
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Registered",
      });
    }

    reset.resetForm();
  };

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
            <span className="text-muted"> &nbsp; &nbsp; Enter Name</span>
            <Field
              type="text"
              className="form-control"
              name="name"
              style={{ width: "40rem" }}
            />
          </div>
          <div className="form-group label-container mb-2 ">
            <label htmlFor="id">ID</label>
            <span className="text-muted"> &nbsp; &nbsp; Enter ID</span>
            <Field
              type="text"
              className="form-control"
              name="id"
              style={{ width: "40rem" }}
            />
          </div>
          <div className="form-group label-container  mb-2">
            <label htmlFor="pid">ProviderID </label>
            <span className="text-muted">
              {" "}
              &nbsp; &nbsp; Enter your provider ID
            </span>
            <Field
              type="text"
              className="form-control "
              name="providerid"
              style={{ width: "40rem" }}
            />
          </div>
          <div className="m-4 text-center btnmargin">
            <Link to="/providers">
              <button className="btnprops1">Cancel</button>
            </Link>
            <button className="ml-3 btnsubmit">Save</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ProvidersAddnew;
