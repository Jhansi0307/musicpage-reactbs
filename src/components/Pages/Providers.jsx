import React from 'react'
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import authentication_icon from "../images/Group 219.png";
import "./Providers.css"
function Providers() {

  return (
    <>
    <div className="application-container">
      <h1 className="pr-3">
        <span>
          <img src={authentication_icon} className="sizeofapp mr-4" />
          Providers
          <Button className="btnprops">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle2" />
          <IoSearchCircle className="pt-1" />
        </span>
        <hr />
      </h1>
    </div>
  </>
  )
}

export default Providers