import React, { useState } from "react";
import providers_icon from "../images/Group 219.png";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function ProvidersAddnew() {
  const [postvalue, SetPostvalue] = useState([
    {
      name: "",
      providerid: "",
    },
  ]);

  const nameHandler = (event) => {
    SetPostvalue((e) => {
      return { ...e, name: event.target.value };
    });
  };
  const providerHandler = (event) => {
    SetPostvalue((e) => {
      return { ...e, providerid: event.target.value };
    });
  };

  const onSubmitHandler = async (e) => {
    // e.preventDefault();
    // console.log(value);
    try {
      const response = await axios.post(
        "https://umusic-app.herokuapp.com/post",
        postvalue
      );

      if (response.data) {
        // Swal.fire("Good!", "Successfully Added", "success");
        console.log(response.data);
      }
      console.log(response.data);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already Registered",
      });
    }
    // reset.resetForm();
  };

  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={providers_icon} alt="" className="sizeofapp mr-4" />
          Add/Edit Provider
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h2>

      <Formik onSubmit={onSubmitHandler}>
        <Form>
          <div className="form-group label-container mb-2 ">
            <label htmlFor="sname">Name</label>
            <span className="text-muted"> &nbsp; &nbsp; Enter the Name</span>
            <Field
              type="text"
              className="form-control"
              name="name"
              onChange={nameHandler}
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
              onChange={providerHandler}
              style={{ width: "40rem" }}
            />
          </div>
          <div className="m-4 text-center btnmargin">
            <Link to="/providers">
              <button className="btnprops1">Cancel</button>
            </Link>
            <Link to="/providers">
              <button
                className="ml-3 btnsubmit"
                type="submit"
                onClick={() => onSubmitHandler()}
              >
                Save
              </button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ProvidersAddnew;
