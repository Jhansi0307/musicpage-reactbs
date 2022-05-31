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
  const pageSize = 10;
  const navigate = useNavigate();
  const [authent, setAuthent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paginatedPosts, setPaginatedPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8000/getauthent").then((response) => {
        setAuthent(response.data);
        setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
        setIsLoading(true);
      });
    }, 2000);
  }, []);

  const handleSearch = async () => {
    var response = await axios.get(
      `http://localhost:8000/searcheauthent/${search}`
    );

    setSearchValue(response.data);

    console.log(searchValue, "searchValue");
  };

  const [search, setSearch] = useState("");

  const pageCount = authent ? Math.ceil(authent.length / pageSize) : 0;
  // const pageCount = 10;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(authent).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPosts);
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
              <Button className="btnprops" variant="info">Add new</Button>
            </Link>{" "}
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
              className="inputstyle1 rounded-left"
            />
            <span className="input-group-addon " onClick={handleSearch}>
              <PageviewSharpIcon className="sizeofsearch1 rounded-right" />
            </span>
          </span>
        </h2>
        <hr style={{ border: "1px solid grey" }} />
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

          {searchValue === "undefined" ||
          (searchValue != 0 && search != "" && searchValue != 0) ? (
            searchValue.map((item) => {
              return (
                <>
                  <thead>
                    <td>{item.name}</td>
                    <td>{item._id}</td>
                    <td>{item.providerid}</td>
                    <td>{item.clientid}</td>
                    <td>{item.clientsecret}</td>
                    <td>{item.authentid}</td>
                    <td>{item.global}</td>
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
        <nav className="d-flex justify-content-center">
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
    </>
  );
}

export default Authenticationprovider;
