import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Table,
  tr,
  th,
  thead,
  tbody,
} from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import authentication_icon from "../images/Group 219.png";
import { Link } from "react-router-dom";
import "./Providers.css";
function Providers() {
  return (
    <>
      <div className="application-container p-2">
        <h1 className="pr-3">
          <span>
            <img src={authentication_icon} className="sizeofapp mr-4" />
            Providers
            <Link to="/providers/addnew">
              <Button className="btnprops">Add new</Button>
            </Link>
            <input type="search" placeholder="Search" className="inputstyle2" />
            <IoSearchCircle className="pt-1" />
          </span>
          <hr style={{ border: "1px solid grey" }} />
        </h1>
        <div className="p-3">
          <Table>
            <thead className="borderstyle">
              <tr>
                <th className="namestyle">
                  Name
                  <IoMdArrowDropdown />
                </th>
                <th>Id</th>
                <th className="ml-5">Provider Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="appname">Provider name</td>
                <td>1</td>
                <td>10342</td>

                <td>
                  <Button className="btnedit">Edit</Button>
                </td>
              </tr>
              <tr>
                <td className="appname">Provider name</td>
                <td>1</td>
                <td>10342</td>
                <td>
                  <Button className="btnedit">Edit</Button>
                </td>
              </tr>
              <tr>
                <td className="appname">Provider name</td>
                <td>1</td>
                <td>10342</td>

                <td>
                  <Button className="btnedit">Edit</Button>
                </td>
              </tr>
              <tr>
                <td className="appname">Provider name</td>
                <td>1</td>
                <td>10342</td>

                <td>
                  <Button className="btnedit">Edit</Button>
                </td>
              </tr>
              <tr>
                <td className="appname">Provider name</td>
                <td>1</td>
                <td>10342</td>

                <td>
                  <Button className="btnedit">Edit</Button>
                </td>
              </tr>
              <tr>
                <td className="appname">Provider name</td>
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

export default Providers;
