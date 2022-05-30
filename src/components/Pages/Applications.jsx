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
  const pageSize = 10;
  const navigate = useNavigate();
  const [appvalue, setAppvalue] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [paginatedPosts, setPaginatedPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8000/getapp").then((response) => {
        setAppvalue(response.data);

        setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
        setIsLoading(true);
      });
    }, 2000);
  }, []);

  const handleSearch = async () => {
    var response = await axios.get(`http://localhost:8000/getname/${search}`);

    setSearchValue(response.data);

    // if (searchValue.length === 0) {
    //   console.log("da");
    //   setCondition(!condition);
    //   console.log(condition);
    // }

    console.log(searchValue, "searchValue");
  };

  const [search, setSearch] = useState("");

  const pageCount = appvalue ? Math.ceil(appvalue.length / pageSize) : 0;
  // const pageCount = 10;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(appvalue).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPosts);
  };
  return (
    <>
      <div className="main-dashboard">
        <div>
          <h2 className="spaceforheader">
            <img src={app_icon} className="sizeofapp mr-4" />
            Applications
            <Link to="/applications/add">
              <Button className="btnprops">Add new</Button>
            </Link>
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value == "") {
                  setSearchValue([]);
                }
                // console.log(search);
              }}
              className="inputstyle rounded-left"
            />
            <span className="input-group-addon " onClick={handleSearch}>
              <PageviewSharpIcon className="sizeofsearch rounded-right" />
            </span>
          </h2>
        </div>

        <hr style={{ border: "1px solid grey" }} />
        <div>
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

            {searchValue === "undefined" ||
            (searchValue != 0 && search != "" && searchValue != 0) ? (
              searchValue.map((item) => {
                return (
                  <>
                    {/* {console.log("working")} */}
                    <thead>
                      <td>{item.name}</td>
                      <td>{item._id}</td>
                      <td>{item.clientid}</td>
                      <td>{item.clientsecret}</td>
                      <td>{item.redirecturl}</td>
                      <td>{item.state}</td>
                    </thead>
                  </>
                );
              })
            ) : !isLoading ? (
              <h1 className="spinner ring">
                <span className="loading"></span>
              </h1>
            ) : (
              paginatedPosts.map((e, index) => {
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
          <hr style={{ position: "relative", marginTop: "-20px" }} />
          <nav className="d-flex justify-content-end">
            <ul className="pagination">
              {pages.map((page) => (
                <li
                  className={
                    page === currentPage ? "page-item-active" : "page-item"
                  }
                >
                  <p className="page-link" onClick={() => pagination(page)}>
                    {page}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Applications;
