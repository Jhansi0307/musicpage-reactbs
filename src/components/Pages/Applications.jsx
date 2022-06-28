import { Button, Col, Container, Row, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import app_icon from "../images/Group 203@2x.png";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Applications.css";
import axios from "axios";
import { MDBCol, MDBIcon } from "mdbreact";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";
import PageviewIcon from "@mui/icons-material/Pageview";
import _ from "lodash";
import { MDBDataTable } from "mdbreact";

// import PageviewRoundedIcon from "@mui/icons-material/PageviewRounded";

function Applications() {
  const [post, setPost] = useState({ count: "", value: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({ limit: 6, skip: 0 });
  const [data, setData] = useState({ name: "" });
  const [number, setNumber] = useState(1);
  const [buttonDis, setButtonDis] = useState(false);
  const [nextButtonDis, setNextButtonDis] = useState(true);
  const [showPagination, setShowPagination] = useState(false);
  const navigate = useNavigate();
  const handleChange = async (e) => {
    setData({ ...data, name: e.target.value });
  };
  const clearData = () => {
    setData({ name: "" });
  };
  useEffect(() => {
    const value = async () => {
      const response = await axios.post("https://umusic-app.herokuapp.com/getname", data);
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
          `https://umusic-app.herokuapp.com/getapp/${pagination.limit}/${pagination.skip}`
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
        <div>
          <h2 className="spaceforheader">
            <img src={app_icon} className="sizeofapp mr-4" />
            Applications
            <Link to="/applications/add">
              <Button className="btnprops" variant="info">
                Add new
              </Button>
            </Link>
            <input
              type="search"
              placeholder="Search"
              onChange={handleChange}
              className="inputstyle rounded-left"
            />
            <span className="input-group-addon ">
              <PageviewSharpIcon className="sizeofsearch rounded-right" />
            </span>
          </h2>
        </div>

        <hr style={{ border: "1px solid grey", marginBottom: "-10px" }} />
        <div className="tablespace">
          <Table responsive className="borderless">
            <thead className="borderstyle">
              <tr style={{ border: "none" }}>
                <th>
                  Name
                  <IoMdArrowDropdown />
                </th>
                <th>Id</th>
                <th>ClientId</th>
                <th>Client Secret</th>
                <th>Redirected URLs</th>
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
                  <>
                    <tbody>
                      <tr>
                        <td
                          className="appname"
                          onClick={(ev) => {
                            navigate(`/applications/view/${e._id}`);
                          }}
                        >
                          {e.name}
                        </td>
                        <td
                          onClick={(ev) => {
                            navigate(`/applications/view/${e._id}`);
                          }}
                        >
                          {e._id}
                        </td>
                        <td
                          onClick={(ev) => {
                            navigate(`/applications/view/${e._id}`);
                          }}
                        >
                          {e.clientid}
                        </td>
                        <td
                          onClick={(ev) => {
                            navigate(`/applications/view/${e._id}`);
                          }}
                        >
                          {e.clientsecret}
                        </td>
                        <td
                          onClick={(ev) => {
                            navigate(`/applications/view/${e._id}`);
                          }}
                        >
                          {e.redirecturl}
                        </td>
                        <td
                          onClick={(ev) => {
                            navigate(`/applications/view/${e._id}`);
                          }}
                        >
                          {e.state}
                        </td>
                        <td
                          onClick={(ev) => {
                            navigate(`/applications/edit/${e._id}`);
                          }}
                        >
                          <Button className="btnedit">Edit</Button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })
            )}
          </Table>
        </div>
        <hr style={{ position: "relative", marginTop: "-20px" }} />
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
                  <button className="pagebtn" onClick={() => ChangePage(Elem)}>
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
    </>
  );
}
export default Applications;
