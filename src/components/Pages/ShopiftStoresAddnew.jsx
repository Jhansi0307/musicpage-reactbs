import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import shopify_icon from "../images/shopify_glyph@2x.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import { Field, Formik } from "formik";

function ShopiftStoresAddnew() {
  const [postvalue, SetPostvalue] = useState([
    {
      name: "",
      secret: "",
    },
  ]);

  const nameHandler = (event) => {
    SetPostvalue((e) => {
      return { ...e, name: event.target.value };
    });
  };
  const secretHandler = (event) => {
    SetPostvalue((e) => {
      return { ...e, secret: event.target.value };
    });
  };

  const onSubmitHandler = async (e) => {
    // e.preventDefault();
    // console.log(value);
    try {
      const response = await axios.post(
        "http://localhost:8000/postshopify",
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
          <img src={shopify_icon} alt="" className="sizeofapp mr-4" />
          Add/Edit Shopify Store
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
              name="storename"
              onChange={nameHandler}
              style={{ width: "40rem" }}
            />
          </div>
          {/* <div className="form-group label-container mb-2 ">
            <label htmlFor="id">ID</label>
            <span className="text-muted"> &nbsp; &nbsp; Enter the ID</span>
            <Field
              type="text"
              className="form-control"
              name="id"
              style={{ width: "40rem" }}
            />
          </div> */}
          <div className="form-group label-container  mb-2">
            <label htmlFor="sid">Secret </label>
            <span className="text-muted"> &nbsp; &nbsp; Enter the Secrete</span>
            <Field
              type="text"
              className="form-control "
              name="storesecret"
              onChange={secretHandler}
              style={{ width: "40rem" }}
            />
          </div>
          <div className="m-4 text-center btnmargin">
            <Link to="/shopify">
              <button className="btnprops1">Cancel</button>
            </Link>
            <Link to="/shopify">
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

export default ShopiftStoresAddnew;
