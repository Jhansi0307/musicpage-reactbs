// import { Button, Col, Container, Row, Table } from "react-bootstrap";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import app_icon from "../images/Group 203@2x.png";
// import { IoSearchCircle } from "react-icons/io5";
// import { IoMdArrowDropdown } from "react-icons/io";
// import "./Applications.css";
// import axios from "axios";
// import { MDBCol, MDBIcon } from "mdbreact";
// import PageviewSharpIcon from "@mui/icons-material/PageviewSharp";
// import PageviewIcon from "@mui/icons-material/Pageview";
// import _ from "lodash";
// import { MDBDataTable } from "mdbreact";
// import { GrPrevious } from "react-icons/gr";
// import "./styles.css";

// function PaginationCompo({data}) {
//   const state = useLocation();
// //   console.log(state);
//   return (
//     <div className="main-dashboard">
//       <div>
//         <h2 className="spaceforheader">
//           <img src={app_icon} className="sizeofapp mr-4" />
//           Applications
//           <Link to="/applications/add">
//             <Button className="btnprops" variant="info">
//               Add new
//             </Button>
//           </Link>
//           <input
//             type="search"
//             placeholder="Search"
//             //   onChange={(e) => {
//             //     setSearch(e.target.value);
//             //     if (e.target.value == "") {
//             //       setSearchValue([]);
//             //     }
//             //     // console.log(search);
//             //   }}
//             className="inputstyle rounded-left"
//           />
//           <span
//             className="input-group-addon "
//             //  onClick={handleSearch}
//           >
//             <PageviewSharpIcon className="sizeofsearch rounded-right" />
//           </span>
//         </h2>
//         <hr style={{ border: "1px solid grey" }} />
//       </div>

//       <Table responsive className="borderless">
//         <thead className="borderstyle">
//           <tr style={{ border: "none" }}>
//             <th>
//               Name
//               <IoMdArrowDropdown />
//             </th>
//             <th>Id</th>
//             <th>ClientId</th>
//             <th>Client Secret</th>
//             <th>Redirected URLs</th>
//             <th>State</th>
//           </tr>
//         </thead>

//         {data.map((e, index) => {
//           return (
//             <tbody>
//               <tr>
//                 <td
//                   className="appname"
//                   //   onClick={(ev) => {
//                   //     navigate(`/applications/view/${e._id}`);
//                   //   }}
//                 >
//                   {e.name}
//                 </td>
//                 <td
//                 //   onClick={(ev) => {
//                 //     useNavigate(`/applications/view/${e._id}`);
//                 //   }}
//                 >
//                   {e._id}
//                 </td>
//                 <td
//                 //   onClick={(ev) => {
//                 //     useNavigate(`/applications/view/${e._id}`);
//                 //   }}
//                 >
//                   {e.clientid}
//                 </td>
//                 <td
//                 //   onClick={(ev) => {
//                 //     useNavigate(`/applications/view/${e._id}`);
//                 //   }}
//                 >
//                   {e.clientsecret}
//                 </td>
//                 <td
//                 //   onClick={(ev) => {
//                 //     useNavigate(`/applications/view/${e._id}`);
//                 //   }}
//                 >
//                   {e.redirecturl}
//                 </td>
//                 <td
//                 //   onClick={(ev) => {
//                 //     useNavigate(`/applications/view/${e._id}`);
//                 //   }}
//                 >
//                   {e.state}
//                 </td>
//                 <td
//                 //   onClick={(ev) => {
//                 //     useNavigate(`/applications/edit/${e._id}`);
//                 //   }}
//                 >
//                   <Button className="btnedit">Edit</Button>
//                 </td>
//               </tr>
//             </tbody>
//           );
//         })}
//       </Table>
//     </div>
//   );
// };
// export default PaginationCompo;
