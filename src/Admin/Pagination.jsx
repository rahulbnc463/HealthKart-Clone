import React from "react";
import "./AllProduct.css";
const Pagination = ({ totalPost, postPerPage,setCurrentPage,currentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button  key={index} onClick={()=>setCurrentPage(page)} className={page==currentPage ? 'active' : ''}  >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
