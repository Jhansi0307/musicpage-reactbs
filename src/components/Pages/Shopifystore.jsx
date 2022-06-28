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
  // const pageSize = 10;
  // const [currentPage, setCurrentPage] = useState(1);
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
      const response = await axios.post("https://umusic-app.herokuapp.com/searched", data);
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
          `https://umusic-app.herokuapp.com/getshopify/${pagination.limit}/${pagination.skip}`
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
        <h2 className="spaceforheader">
          <span>
            <img src={shopify_icon} className="sizeofapp mr-4" />
            Shopify Stores
            <Link to="/shopify/add">
              <Button className="btnprops" variant="info">
                Add new
              </Button>
            </Link>
            <input
              type="search"
              placeholder="Search"
              onChange={handleChange}
              className="inputstyle4 rounded-left"
            />
            <span className="input-group-addon">
              <PageviewSharpIcon className="sizeofsearchshopify rounded-right" />
            </span>
          </span>
        </h2>
        <hr style={{ border: "1px solid grey", marginBottom: "-10px" }} />
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

            {!isLoading ? (
              <h1 className="spinner ring">
                <span className="loading"></span>
              </h1>
            ) : post.value.length === 0 ? (
              <h7>No Data Found</h7>
            ) : (
              post.value.map((e) => {
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

export default Shopifystore;
