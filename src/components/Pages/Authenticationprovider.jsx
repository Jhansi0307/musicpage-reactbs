import React from "react";
import { Button, InputGroup, FormControl, Table } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import authentication_icon from "../images/Group 219.png";
import {Link} from "react-router-dom";
import "./Authenticationproviders.css";
import { IoMdArrowDropdown } from "react-icons/io";
function Authenticationprovider() {
  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3">
          <span>
            <img src={authentication_icon} className="sizeofapp mr-4" />
            Authentication Providers
            <Link to="/authenticationproviders/addnew">
              {" "}
              <Button className="btnprops">Add new</Button>
            </Link>{" "}
            <input type="search" placeholder="Search" className="inputstyle1" />
            <IoSearchCircle className="pt-1" />
          </span>
          <hr style={{ border: "1px solid grey" }} />
        </h1>
        <div className="p-2">
        <Table>
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
          <tbody>
            <tr>
              <td className="appname">Application name</td>
              <td>1</td>
              <td>10342</td>
              <td>8892</td>
              <td>8892</td>
              <td>882</td>
              <td>True</td>
              <td>State</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Application name</td>
              <td>1</td>
              <td>10342</td>
              <td>8892</td>
              <td>8892</td>
              <td>882</td>
              <td>True</td>
              <td>State</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Application name</td>
              <td>1</td>
              <td>10342</td>
              <td>8892</td>
              <td>8892</td>
              <td>882</td>
              <td>True</td>
              <td>State</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Application name</td>
              <td>1</td>
              <td>10342</td>
              <td>8892</td>
              <td>882</td>
              <td>882</td>
              <td>False</td>
              <td>State</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Application name</td>
              <td>1</td>
              <td>10342</td>
              <td>8892</td>
              <td>8892</td>
              <td>882</td>
              <td>True</td>
              <td>State</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
            <tr>
              <td className="appname">Application name</td>
              <td>1</td>
              <td>10342</td>
              <td>8892</td>
              <td>8892</td>
              <td>882</td>
              <td>False</td>
              <td>State</td>
              <td>
                <Button className="btnedit">Edit</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <hr />
      </div>
      </div>
    </>
  );
}

export default Authenticationprovider;
