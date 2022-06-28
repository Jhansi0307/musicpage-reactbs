import React, { useEffect, useState } from "react";
import providers_icon from "../images/Group 219.png";
import { Button } from "react-bootstrap";
import { Formik, Form, Field, setIn } from "formik";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditShopify(props) {
  const params = useParams();
  const navigation = useNavigate();
  const [store, setStore] = useState({ name: "", secret: "" });

  useEffect(() => {
    axios
      .get(`https://umusic-app.herokuapp.com/getshopify/${params.edit}`)
      .then((response) => {
        setStore(response.data);
      });
  }, []);

  const nameHandler = (event) => {
    setStore((e) => ({ ...e, name: event.target.value }));
  };
  const secreteHandler = (event) => {
    setStore((e) => ({ ...e, secret: event.target.value }));
  };
  const updateValue = (event) => {
    // event.preventDefault();
    // console.log(name);
    // console.log(secret);
    const data = { name: store.name, secret: store.secret };
    console.log(data);

    axios.put(`http://localhost:8000/update/${params.edit}`, data);
    setStore({ name: "", providerid: "" });
    navigation("/shopify");
  };

  return (
    <div className="main-dashboard">
      <h2 className="pr-3 p-2">
        <span>
          <img src={providers_icon} alt="" className="sizeofapp mr-4" />
          Edit Shopify Stores
        </span>
        <hr style={{ border: "1px solid grey" }} />
      </h2>
      <Formik>
        <Form>
          <div className="form-group label-container mb-2 ">
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              className="form-control"
              value={store.name}
              style={{ width: "40rem" }}
              onChange={nameHandler}
            />
          </div>
          <div className="form-group label-container  mb-2">
            <label htmlFor="secret">Secrete </label>

            <Field
              type="text"
              className="form-control "
              value={store.secret}
              onChange={secreteHandler}
              style={{ width: "40rem" }}
            />
          </div>
          <div className="m-4 text-center btnmargin">
            <Link to="/shopify">
              <button className="btnprops1">Cancel</button>
            </Link>

            <button
              className="ml-3 btnsubmit"
              // onClick={() => updateUser(name, secrete)}
              type="submit"
              onClick={() => updateValue()}
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default EditShopify;

// import React, { useEffect, useState } from "react";
// import providers_icon from "../images/Group 219.png";
// import { Button } from "react-bootstrap";
// import { Formik, Form, Field } from "formik";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import * as yup from "yup";
// import { useDispatch,useSelector } from "react-redux";

// function EditShopifystore() {
//   const dispatch = useDispatch();
//   const { shopify } = useSelector((state) => state);
//   const data1 = shopify;

//   // console.log(props);
//   const { state } = useLocation();
//   const updateUser = async (name, id, secrete) => {
//     try {
//       var response = await axios.put(
//         `http://localhost:8000/update/${id}`,

//         {
//           name,
//           secrete,
//         },

//         {
//           headers: {
//             "access-token": localStorage.getItem("token"),
//           },
//         }
//       );
//       console.log("successfully added");
//       // Swal.fire("Good!", "Successfully Updated", "success");
//     } catch (e) {
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "No data updated",
//       });
//     }

//     // navigate("");

//     console.log(response);
//   };

//   //in viewprovider use this concept

//   const onchangeName = (event) => {
//     setName(event.target.value);
//     console.log(event.target.value);
//   };

//   const onchangesetSecrete = (event) => {
//     setSecrete(event.target.value);
//     console.log(event.target.value);
//   };

//   // console.log(state);
//   // console.log(props);
//   const [data, setData] = useState(null);
//   const [name, setName] = useState("");

//   const [secrete, setSecrete] = useState("");
//   const [validation, setValidation] = useState(false);

//   useEffect(() => {
//     axios.get(`http://localhost:8000/get/${state}`).then((response) => {
//       setData(response.data);
//       console.log(response.data.id);
//       setName(response.data.name);

//       setSecrete(response.data.secrete);

//       dispatch({
//         type: "store",
//         payload: response.data.id,
//       });

//       setValidation(!validation);
//     });
//   }, [shopify]);

//   // console.log(state);
//   if (!data) return null;
//   return (
//     <div className="main-dashboard">
//       <h1 className="pr-3">
//         <span>
//           <img src={providers_icon} alt="" className="sizeofapp mr-4" />
//           Add/Edit Shopify Stores
//         </span>
//         <hr style={{ border: "1px solid grey" }} />
//       </h1>
//       <Formik

//       >
//         <Form>
//           <div className="form-group label-container mb-2 ">
//             <label htmlFor="name">Name</label>
//             <Field
//               type="text"
//               className="form-control"
//               name="name"
//               value={name}
//               style={{ width: "40rem" }}
//               onChange={onchangeName}
//             />
//           </div>
//           <div className="form-group label-container  mb-2">
//             <label htmlFor="secrete">Secrete </label>

//             <Field
//               type="text"
//               className="form-control "
//               name="secrete"
//               value={secrete}
//               onChange={onchangesetSecrete}
//               style={{ width: "40rem" }}
//             />
//           </div>
//           <div className="m-4 text-center btnmargin">
//             <Link to="/shopify">
//               <button className="btnprops1">Cancel</button>
//             </Link>
//             <Link to="/shopify">
//               <button
//                 className="ml-3 btnsubmit"
//                 onClick={() => updateUser(name, secrete)}
//                 type="submit"
//               >
//                 Save
//               </button>
//             </Link>
//           </div>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// export default EditShopifystore;
