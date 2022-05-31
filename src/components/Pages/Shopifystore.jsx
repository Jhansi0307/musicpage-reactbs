import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import shopify_icon from "../images/shopify_glyph@2x.png";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Shopifystores.css";
import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";
import axios from "axios";
import _ from "lodash";

function Shopifystore() {
  const pageSize = 10;
  const navigate = useNavigate();
  const [paginatedPosts, setPaginatedPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchValue, setSearchValue] = useState([]);
  const [condition, setCondition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:8000/getshopify").then((response) => {
        setData(response.data);

        setPaginatedPosts(_(response.data).slice(0).take(pageSize).value());
        setIsLoading(true);
      });
    }, 2000);
  }, []);

  const handleSearch = async () => {
    var response = await axios.get(`http://localhost:8000/searched/${search}`);
    setSearchValue(response.data);
    console.log(searchValue, "searchValue");
  };

  const [search, setSearch] = useState("");

  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  // const pageCount = 10;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPosts = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPosts);
  };

  return (
    <>
      <div className="main-dashboard">
        <h2 className="spaceforheader">
          <span>
            <img src={shopify_icon} className="sizeofapp mr-4" />
            Shopify Stores
            <Link to="/shopify/add">
              <Button className="btnprops" variant="info">Add new</Button>
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
              className="inputstyle4 rounded-left"
            />
            <span className="input-group-addon " onClick={handleSearch}>
              <PageviewSharpIcon className="sizeofsearchshopify rounded-right" />
            </span>
          </span>
        </h2>
        <hr style={{ border: "1px solid grey" }} />
      </div>
      <div className="tablespace">
        <Table responsive className="borderless">
          <thead className="borderstyle">
            <tr>
              <th className="nameproperty">
                Name
                <IoMdArrowDropdown />
              </th>
              <th className="nameproperty">Id</th>
              <th className="nameproperty">Secret</th>
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
                    <td>{item.secret}</td>
                  </thead>
                </>
              );
            })
          ) : !isLoading ? (
            <h1 className="spinner ring">
              <span className="loading"></span>
            </h1>
          ) : (
            paginatedPosts.map((e) => {
              return (
                <tbody>
                  <tr>
                    <td
                      className="appname"
                      onClick={(event) => {
                        navigate(`/shopify/view/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/shopify/view/${e._id}`} key={data._id}> */}
                      {e.name}
                      {/* </Link> */}
                    </td>

                    <td
                      onClick={(event) => {
                        navigate(`/shopify/view/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/shopify/view/${e._id}`} key={data._id}> */}
                      {e._id}
                      {/* </Link> */}
                    </td>

                    <td
                      onClick={(event) => {
                        navigate(`/shopify/view/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/shopify/view/${e._id}`} key={data._id}> */}
                      {e.secret}
                      {/* </Link> */}
                    </td>

                    <td
                      onClick={(event) => {
                        navigate(`/shopify/edit/${e._id}`);
                      }}
                    >
                      {/* <Link to={`/shopify/edit/${e._id}`} key={data._id}> */}
                      <Button className="btnedit">Edit</Button>
                      {/* </Link> */}
                    </td>
                    <td></td>
                  </tr>
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

export default Shopifystore;
