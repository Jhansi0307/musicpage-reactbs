import React, { useEffect, useState } from "react";
import { Button, InputGroup, FormControl, Table } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import authentication_icon from "../images/Group 219.png";
import { Link, useNavigate } from "react-router-dom";
import "./Authenticationproviders.css";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import _ from "lodash";
function Authenticationprovider() {
  const navigate = useNavigate();
  const [post, setPost] = useState({ count: "", value: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({ limit: 6, skip: 0 });
  const [data, setData] = useState({ name: "" });
  const [number, setNumber] = useState(1);
  const [buttonDis, setButtonDis] = useState(false);
  const [nextButtonDis, setNextButtonDis] = useState(true);
  const [showPagination, setShowPagination] = useState(false);

  const handleChange = async (e) => {
    setData({ ...data, name: e.target.value });
  };
  const clearData = () => {
    setData({ name: "" });
  };
  useEffect(() => {
    const value = async () => {
      const response = await axios.post(
        "http://localhost:8000/searcheauthent",
        data
      );
      console.log(response.data);
      console.log(post.count);
      setPost((previous) => ({
        ...previous,
        value: response.data,
      }));
    };
    value();
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(
          `http://localhost:8000/getauthent/${pagination.limit}/${pagination.skip}`
        )
        .then((res) => {
          console.log(res.data);
          setPost({ count: res.data.count, value: res.data.value });
          setShowPagination(true);
          setIsLoading(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 800);
    if (pagination.skip / pagination.limit === 0) {
      setButtonDis(true);
    } else {
      setButtonDis(false);
    }
    if (
      pagination.skip / pagination.limit + 1 ===
      Math.ceil(post.count / pagination.limit)
    ) {
      setNextButtonDis(true);
    } else {
      setNextButtonDis(false);
    }
  }, [pagination]);
  if (post.value.length > 6) {
    const sea = post.value.slice(0, 6);
    setPost((previous) => ({
      ...previous,
      value: sea,
    }));
  }
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(post.count / pagination.limit); i++) {
    pageNumber.push(i);
  }
  const ChangePage = (pageNumber) => {
    setNumber(pageNumber);
    setPagination((previous) => ({
      ...previous,
      skip: pagination.limit * (pageNumber - 1),
    }));
  };
  const onPreviousPageHandler = () => {
    console.log(pagination.skip / pagination.limit);
    setPagination((previous) => ({
      ...previous,
      skip: pagination.limit * (pagination.skip / pagination.limit - 1),
    }));
  };
  const onNextPageHandler = () => {
    console.log(pagination.skip / pagination.limit);
    setPagination((previous) => ({
      ...previous,
      skip: pagination.limit * (pagination.skip / pagination.limit + 1),
    }));
  };
  return (
    <>
      <div className="main-dashboard">
        <h2 className="spaceforauthent">
          <span>
            <img src={authentication_icon} className="sizeofapp mr-4" />
            Authentication Providers
            <Link to="/authenticationproviders/add">
              {" "}
              <Button className="btnprops" variant="info">
                Add new
              </Button>
            </Link>{" "}
            <input
              type="search"
              placeholder="Search"
              onChange={handleChange}
              className="inputstyle1 rounded-left"
            />
            <span className="input-group-addon ">
              <PageviewSharpIcon className="sizeofsearch1 rounded-right" />
            </span>
          </span>
        </h2>

        <hr style={{ border: "1px solid grey", marginBottom: "-10px" }} />
        <div className="tablespace">
          <Table responsive className="borderless">
            <thead className="borderstyle">
              <tr>
                <th className="namestyle">
                  Name
                  <IoMdArrowDropdown />
                </th>
                <th>Id</th>
                <th>Provider ID</th>
                <th>Client ID</th>
                <th>Client Secret</th>
                <th>App ID</th>
                <th>Global</th>
                <th>State</th>
              </tr>
            </thead>

            {!isLoading ? (
              <h1 className="spinner ring">
                <span className="loading"></span>
              </h1>
            ) : post.value.length === 0 ? (
              <h7>No Data Found</h7>
            ) : (
              post.value.map((e, index) => {
                return (
                  <tbody>
                    <tr>
                      <td
                        className="appname"
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.name}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e._id}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.providerid}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.clientid}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.clientsecret}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.authentid}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.global}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/view/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/view/${e._id}`}
                        key={authent._id}
                      > */}
                        {e.state}
                        {/* </Link> */}
                      </td>
                      <td
                        onClick={() => {
                          navigate(`/authenticationproviders/edit/${e._id}`);
                        }}
                      >
                        {/* <Link
                        to={`/authenticationproviders/edit/${e._id}`}
                        key={authent._id}
                      > */}
                        <Button className="btneditsuthent">Edit</Button>
                        {/* </Link> */}
                      </td>
                    </tr>
                    <tr></tr>
                  </tbody>
                );
              })
            )}
          </Table>
          <hr style={{ position: "relative", marginTop: "-17px" }} />
          {showPagination ? (
            <div className="text-center" style={{ marginTop: "0px" }}>
              <button
                className="btnedit1"
                onClick={onPreviousPageHandler}
                disabled={buttonDis}
              >
                Previous
              </button>

              {pageNumber.map((Elem) => {
                return (
                  <>
                    <button
                      className="pagebtn"
                      onClick={() => ChangePage(Elem)}
                    >
                      {Elem}
                    </button>
                  </>
                );
              })}
              <button
                className="btnedit1"
                onClick={onNextPageHandler}
                disabled={nextButtonDis}
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Authenticationprovider;
