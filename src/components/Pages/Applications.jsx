import { Button, Table } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import app_icon from "../images/Group 203@2x.png";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Applications.css";
export default function Applications() {
  return (
    <div className="main-dashboard">
      <h1 className="pr-3">
        <span>
          <img src={app_icon} className="sizeofapp mr-4" />
          Applications
          <Link to="/applications/addnew">
            <Button className="btnprops">Add new</Button>
          </Link>
          <input type="search" placeholder="Search" className="inputstyle" />
          <IoSearchCircle className="pt-1" />
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h1>
      <Table>
        <thead className="borderstyle">
          <tr>
            <th className="namestyle">
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
        <tbody>
          <tr>
            <td className="appname">
              {" "}
              <Link to="/applications/viewapplications">Application name</Link>
            </td>

            <td>
              <Link to="/applications/viewapplications">1</Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">10342</Link>{" "}
            </td>
            <td>
              <Link to="/applications/viewapplications">8892</Link>{" "}
            </td>

            <td>
              <Link to="/applications/viewapplications">
                https/www.umusic.com
              </Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">State</Link>
            </td>

            <td>
              <Link to="/applications/addnew">
                <Button className="btnedit">Edit</Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="appname">
              {" "}
              <Link to="/applications/viewapplications">Application name</Link>
            </td>

            <td>
              <Link to="/applications/viewapplications">1</Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">10342</Link>{" "}
            </td>
            <td>
              <Link to="/applications/viewapplications">8892</Link>{" "}
            </td>

            <td>
              <Link to="/applications/viewapplications">
                https/www.umusic.com
              </Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">State</Link>
            </td>

            <td>
              <Link to="/applications/addnew">
                <Button className="btnedit">Edit</Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="appname">
              {" "}
              <Link to="/applications/viewapplications">Application name</Link>
            </td>

            <td>
              <Link to="/applications/viewapplications">1</Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">10342</Link>{" "}
            </td>
            <td>
              <Link to="/applications/viewapplications">8892</Link>{" "}
            </td>

            <td>
              <Link to="/applications/viewapplications">
                https/www.umusic.com
              </Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">State</Link>
            </td>

            <td>
              <Link to="/applications/addnew">
                <Button className="btnedit">Edit</Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="appname">
              {" "}
              <Link to="/applications/viewapplications">Application name</Link>
            </td>

            <td>
              <Link to="/applications/viewapplications">1</Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">10342</Link>{" "}
            </td>
            <td>
              <Link to="/applications/viewapplications">8892</Link>{" "}
            </td>

            <td>
              <Link to="/applications/viewapplications">
                https/www.umusic.com
              </Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">State</Link>
            </td>

            <td>
              <Link to="/applications/addnew">
                <Button className="btnedit">Edit</Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="appname">
              {" "}
              <Link to="/applications/viewapplications">Application name</Link>
            </td>

            <td>
              <Link to="/applications/viewapplications">1</Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">10342</Link>{" "}
            </td>
            <td>
              <Link to="/applications/viewapplications">8892</Link>{" "}
            </td>

            <td>
              <Link to="/applications/viewapplications">
                https/www.umusic.com
              </Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">State</Link>
            </td>

            <td>
              <Link to="/applications/addnew">
                <Button className="btnedit">Edit</Button>
              </Link>
            </td>
          </tr>
          <tr>
            <td className="appname">
              {" "}
              <Link to="/applications/viewapplications">Application name</Link>
            </td>

            <td>
              <Link to="/applications/viewapplications">1</Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">10342</Link>{" "}
            </td>
            <td>
              <Link to="/applications/viewapplications">8892</Link>{" "}
            </td>

            <td>
              <Link to="/applications/viewapplications">
                https/www.umusic.com
              </Link>
            </td>
            <td>
              <Link to="/applications/viewapplications">State</Link>
            </td>

            <td>
              <Link to="/applications/addnew">
                <Button className="btnedit">Edit</Button>
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
      <hr />
    </div>
  );
}
