import React, { useEffect, useState } from "react";
import providers_icon from "../images/Group 219.png";
import { Button } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditProvider(props) {
  const [editData, setEditData] = useState({ name: "", providerid: "" });
  const params = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    axios.get(`https://umusic-app.herokuapp.com/get/${params.edit}`).then((response) => {
      setEditData(response.data);
    });
  }, []);
  const nameHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      name: event.target.value,
    }));
  };
  const providerHandler = (event) => {
    setEditData((previous) => ({
      ...previous,
      providerid: event.target.value,
    }));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: editData.name,
      providerid: editData.providerid,
    };
    axios.put(`http://localhost:8000/put/${params.edit}`, data);
    setEditData({ name: "", providerid: "" });
    navigation("/providers");
  };
  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={providers_icon} alt="" className="sizeofapp mr-4" />
          Edit Provider
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h2>
      <Formik>
        <Form>
          <div className="form-group label-container mb-2 ">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              className="form-control"
              style={{ width: "40rem" }}
              value={editData.name}
              onChange={nameHandler}
            />
          </div>
          <div className="form-group label-container  mb-2">
            <label htmlFor="secret">ProviderID </label>

            <Field
              type="text"
              className="form-control "
              value={editData.providerid}
              style={{ width: "40rem" }}
              onChange={providerHandler}
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
                onClick={onSubmitHandler}
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

export default EditProvider;
