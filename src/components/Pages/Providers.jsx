import { Button, Table } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import authentication_icon from "../images/Group 219.png";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";
import "./Providers.css";
import _ from "lodash";
function Providers() {
  const pageSize = 10;

  const [value, setValue] = useState(null);
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [paginatedPosts, setPaginatedPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8000/get").then((response) => {
        setValue(response.data);
        setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
        setIsLoading(true);
      });
    }, 2000);
  }, []);

  const handleSearch = async () => {
    var response = await axios.get(
      `http://localhost:8000/searchprovider/${search}`
    );

    setSearchValue(response.data);

    // if (searchValue.length === 0) {
    //   console.log("da");
    //   setCondition(!condition);
    //   console.log(condition);
    // }

    console.log(searchValue, "searchValue");
  };

  const [search, setSearch] = useState("");

  const pageCount = value ? Math.ceil(value.length / pageSize) : 0;
  // const pageCount = 10;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(value).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPosts);
  };

  return (
    <>
      <div className="main-dashboard">
        <h2 className="spaceforheader">
          <span>
            <img src={authentication_icon} className="sizeofapp mr-4" />
            Providers
            <Link to="/providers/add">
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
              className="inputstyle2 rounded-left"
            />
            <span className="input-group-addon " onClick={handleSearch}>
              <PageviewSharpIcon className="sizeofsearchproviders rounded-right" />
            </span>
          </span>
        </h2>{" "}
        <hr style={{ border: "1px solid grey" }} />
      </div>
      <div className="tablespace">
        <Table responsive className="borderless">
          <thead className="borderstyle ">
            <tr>
              <th className="nameproperty">
                Name
                <IoMdArrowDropdown />
              </th>
              <th className="nameproperty">ID</th>
              <th className="nameproperty">Provider ID</th>
              <th className="nameproperty"></th>
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
                        navigate(`/providers/view/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/providers/view/${e._id}`} key={value._id}> */}
                      {e.name}
                      {/* </Link> */}
                    </td>

                    <td
                      onClick={() => {
                        navigate(`/providers/view/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/providers/view/${e._id}`} key={value._id}> */}
                      {e._id}
                      {/* </Link> */}
                    </td>
                    <td
                      onClick={() => {
                        navigate(`/providers/view/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/providers/view/${e._id}`} key={value._id}> */}
                      {e.providerid}
                      {/* </Link> */}
                    </td>

                    <td
                      onClick={() => {
                        navigate(`/providers/edit/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/providers/edit/${e._id}`} key={value._id}> */}
                      <Button className="btnedit">Edit</Button>
                      {/* </Link> */}
                    </td>
                  </tr>
                </tbody>
              );
            })
          )}
        </Table>
        <hr style={{ position: "relative", marginTop: "-17px" }} />
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
    </>
  );
}
export default Providers;
