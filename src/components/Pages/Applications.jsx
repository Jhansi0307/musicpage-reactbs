import { Button, InputGroup, FormControl,Table,td,th,tr,thead,tb } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import app_icon from "../images/Group 203@2x.png";
import { IoSearchCircle } from "react-icons/io5";
import "./Applications.css";
function Applications() {
  return (
    <div className="application-container">
      <h1 className="pr-3">
        <span>
          <img src={app_icon} className="sizeofapp mr-4" />
          Applications
          <Button className="btnprops">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle" />
          <IoSearchCircle className="pt-1"/>
        </span>
        <hr />
      </h1>
      <Table striped bordered hover size="sm">
  <thead>
    <tr>
   
      <th>Name</th>
      <th>Id</th>
      <th>ClientId</th>
      <th>Client Secret</th>
      <th>Redirected URLs</th>
      <th>State</th>
    </tr>
  </thead>
  <tbody>
    <tr>
   
    <td>Mark</td>
      <td>1</td>
      <td>10342</td>
      <td>8892</td>
      <td>https/www.umusic.com</td>
      <td>State</td>
      <td><Button>Edit</Button></td>
    </tr>
    <tr>
    
    <td>Application name</td>
      <td>1</td>
      <td>10342</td>
      <td>8892</td>
      <td>https/www.umusic.com</td>
      <td>State</td>
      <td><Button>Edit</Button></td>
    </tr>
    <tr>
  
    <td>Mark</td>
      <td>1</td>
      <td>10342</td>
      <td>8892</td>
      <td>https/www.umusic.com</td>
      <td>State</td>
      <td><Button>Edit</Button></td>
    </tr>
    <tr>
  
    <td>Mark</td>
      <td>1</td>
      <td>10342</td>
      <td>8892</td>
      <td>https/www.umusic.com</td>
      <td>State</td>
      <td><Button>Edit</Button></td>
    </tr>
    <tr>
  
    <td>Mark</td>
      <td>1</td>
      <td>10342</td>
      <td>8892</td>
      <td>https/www.umusic.com</td>
      <td>State</td>
      <td><Button>Edit</Button></td>
    </tr>
    <tr>
  
    <td>Mark</td>
      <td>1</td>
      <td>10342</td>
      <td>8892</td>
      <td>https/www.umusic.com</td>
      <td>State</td>
      <td><Button>Edit</Button></td>
    </tr>
  </tbody>
</Table>


    </div>
  );
}

export default Applications;
