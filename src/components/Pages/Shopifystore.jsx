import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Table,
  tr,
  th,
  td,
  thead,
  tbody,
} from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import shopify_icon from "../images/shopify_glyph@2x.png";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Shopifystores.css";
function Shopifystore() {
  return (
    <>
      <div className="application-container p-2">
        <h1 className="pr-3">
          <span>
            <img src={shopify_icon} className="sizeofapp mr-4" />
            Shopify Stores
            <Link to="/shopify/addnew">
              <Button className="btnprops">Add new</Button>
            </Link>
            <input type="search" placeholder="Search" className="inputstyle4" />
            <IoSearchCircle className="pt-1" />
          </span>
          <hr style={{ border: "1px solid grey" }} />
        </h1>
<div className="p-3">
        <Table>
          <thead className="borderstyle">
            <tr>
              <th>
                Name
                <IoMdArrowDropdown />
              </th>
              <th>Id</th>
              <th className="ml-5">Secret</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="appname">Store name</td>
              <td>1</td>
              <td>10342</td>

              <td>
                <Button className="btnedit outline-secondary">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Store name</td>
              <td>1</td>
              <td>10342</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Store name</td>
              <td>1</td>
              <td>10342</td>

              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Store name</td>
              <td>1</td>
              <td>10342</td>

              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Store name</td>
              <td>1</td>
              <td>10342</td>

              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Store name</td>
              <td>1</td>
              <td>10342</td>

              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
      </div>
    </>
  );
}

export default Shopifystore;
