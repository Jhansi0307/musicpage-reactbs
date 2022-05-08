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
import axios from "axios";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Providers.css";

function Providers(props) {
  const [state1, setState] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/get").then((response) => {
      setState(response.data);

      console.log(response.data);
    });
  }, []);

  if (!state1) return null;

  return (
    <>
      <div className="main-dashboard">
        <h1 className="pr-3">
          <span>
            <img src={authentication_icon} className="sizeofapp mr-4" />
            Providers
            <Link to="/providers/add">
              <Button className="btnprops">Add new</Button>
            </Link>
            <input type="search" placeholder="Search" className="inputstyle2" />
            <IoSearchCircle className="pt-1" />
          </span>
          <hr style={{ border: "1px solid grey" }} />
        </h1>
      </div>
      <div className="p-3">
        <Table>
          <thead className="borderstyle">
            <tr>
              <th className="nameproperty">
                Name
                <IoMdArrowDropdown />
              </th>
              <th className="nameproperty">Id</th>
              <th className="nameproperty">Provider Id</th>
            </tr>
          </thead>
          {state1.map((e) => {
            return (
              <tbody>
                <tr>
                  <td className="appname">
                    <Link
                      to="/providers/viewproviders"
                      key={state1.id}
                      state={e.id}
                    >
                      {e.name}
                    </Link>
                  </td>

                  <td>
                    <Link to="/providers/viewproviders" key={state1.id}
                      state={e.id}>{e.id}</Link>
                  </td>
                  <td>
                    <Link to="/providers/viewproviders" key={state1.id}
                      state={e.id}>{e.providerid}</Link>
                  </td>

                  <td>
                    <Link to="/providers/edit" key={state1.id}
                      state={e.id}>
                      <Button className="btnedit">Edit</Button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </>
  );
}

export default Providers;

// import React from "react";
// import {
//   Button,
//   InputGroup,
//   FormControl,
//   Table,
//   tr,
//   th,
//   thead,
//   tbody,
// } from "react-bootstrap";
// import { IoSearchCircle } from "react-icons/io5";
// import { IoMdArrowDropdown } from "react-icons/io";
// import authentication_icon from "../images/Group 219.png";
// import { Link } from "react-router-dom";
// import "./Providers.css";
// function Providers() {
//   return (
//     <>
//       <div className="main-dashboard">
//         <h1 className="pr-3">
//           <span>
//             <img src={authentication_icon} className="sizeofapp mr-4" />
//             Providers
//             <Link to="/providers/add">
//               <Button className="btnprops">Add new</Button>
//             </Link>
//             <input type="search" placeholder="Search" className="inputstyle2" />
//             <IoSearchCircle className="pt-1" />
//           </span>
//           <hr style={{ border: "1px solid grey" }} />
//         </h1>
//         <div className="p-3">
//           <Table>
//             <thead className="borderstyle">
//               <tr>
//                 <th className="nameproperty">
//                   Name
//                   <IoMdArrowDropdown />
//                 </th>
//                 <th className="nameproperty">Id</th>
//                 <th className="nameproperty">Provider Id</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="appname">

//                   <Link className="width" to="/providers/viewproviders">Provider name</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">1</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">10342</Link>
//                 </td>

//                 <td>
//                   <Link to="/providers/add">
//                     <Button className="btnedit">Edit</Button>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="appname">
//                   {" "}
//                   <Link to="/providers/viewproviders">Provider name</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">1</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">10342</Link>
//                 </td>

//                 <td>
//                   <Link to="/providers/add">
//                     <Button className="btnedit">Edit</Button>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="appname">
//                   {" "}
//                   <Link to="/providers/viewproviders">Provider name</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">1</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">10342</Link>
//                 </td>

//                 <td>
//                   <Link to="/providers/add">
//                     <Button className="btnedit">Edit</Button>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="appname">
//                   {" "}
//                   <Link to="/providers/viewproviders">Provider name</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">1</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">10342</Link>
//                 </td>

//                 <td>
//                   <Link to="/providers/add">
//                     <Button className="btnedit">Edit</Button>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="appname">
//                   {" "}
//                   <Link to="/providers/viewproviders">Provider name</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">1</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">10342</Link>
//                 </td>

//                 <td>
//                   <Link to="/providers/add">
//                     <Button className="btnedit">Edit</Button>
//                   </Link>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="appname">
//                   {" "}
//                   <Link to="/providers/viewproviders">Provider name</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">1</Link>
//                 </td>
//                 <td>
//                   {" "}
//                   <Link to="/providers/viewproviders">10342</Link>
//                 </td>

//                 <td>
//                   <Link to="/providers/add">
//                     <Button className="btnedit">Edit</Button>
//                   </Link>
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Providers;
