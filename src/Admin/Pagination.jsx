import React from 'react'
import "./AllProduct.css";

const Pagination = ({productPerPage,totalProduct,paginate}) => {
const pageNumbers = [];

for(let i=1;i<=Math.ceil(totalProduct / productPerPage);i++){
 pageNumbers.push(i)
}

  return (
    <nav>
        <ul className='pagination' >
            {pageNumbers.map((number)=>{
                return <li key={number} className='page_item' ><a onClick={() => paginate(number)} href="!#"></a>{number}</li>
            })}
        </ul>
    </nav>
  )
}

export default Pagination