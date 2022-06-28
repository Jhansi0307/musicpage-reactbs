// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import PaginationCompo from "./PaginationCompo"; 
// import axios from "axios";



// function PaginationComponent() {

//   const [data, setData] = useState([]);
//   const [currentPage, setcurrentPage] = useState(1);
//   const [itemsPerPage, setitemsPerPage] = useState(5);
//   const [pageNumberLimit, setpageNumberLimit] = useState(5);
//   const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
//   const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);
//   const handleClick = (event) => {
//     setcurrentPage(Number(event.target.id));
//   };
//   const pages = [];
//   for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//     pages.push(i);
//   }
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
//   const renderPageNumbers = pages.map((number) => {

//     if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {

//       return (
//         <li 
//           key={number}
//           id={number}
//           onClick={handleClick}
//           className={currentPage == number ? "active" : null}
//         >
//           {number}
//         </li>
//       );

//     }
//     else {
//       return null;
//     }
//   });

//  useEffect(() => {
//     setTimeout(() => {
//       axios.get("http://localhost:8000/getapp").then((response) => {
//         setData(response.data);
//         setIsLoading(true);
//       });
//     }, 2000);
//   }, []);


//   const handleNextbtn = () => {

//     setcurrentPage(currentPage + 1);
//     if (currentPage + 1 > maxPageNumberLimit) {
//       setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//       setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//     }
//   };

//   const handlePrevbtn = () => {
//     setcurrentPage(currentPage - 1);

//     if ((currentPage - 1) % pageNumberLimit == 0) {
//       setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//       setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//     }
//   };

//   let pageIncrementBtn = null;
//   if (pages.length > maxPageNumberLimit) {
//     pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
//   }

//   let pageDecrementBtn = null;
//   if (minPageNumberLimit >= 1) {
//     pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
//   }

  
//   return (
//     <>
//       {PaginationCompo(currentItems)}
//       <ul className="pageNumbers">
//         <li>
//           <button
//             onClick={handlePrevbtn}
//             disabled={currentPage == pages[0] ? true : false}
//           >
//             Prev 
//           </button>
//         </li>

//         {pageDecrementBtn}
//         {renderPageNumbers}
//         {pageIncrementBtn}


//         <li>
//           <button
//             onClick={handleNextbtn}
//             disabled={currentPage == pages[pages.length - 1] ? true : false}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </>
//   );
// }
// export default PaginationComponent;
