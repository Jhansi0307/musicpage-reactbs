
import React from 'react'
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import shopify_icon from "../images/shopify_glyph@2x.png";
import "./Shopifystores.css"
function Shopifystore() {
  return (

<>
    <div className="application-container">
      <h1 className="pr-3">
        <span>
          <img src={shopify_icon} className="sizeofapp mr-4" />
          Shopify Stores
          <Button className="btnprops">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle4" />
          <IoSearchCircle className="pt-1" />
        </span>
        <hr />
      </h1>
    </div>
  </>
  )
}

export default Shopifystore