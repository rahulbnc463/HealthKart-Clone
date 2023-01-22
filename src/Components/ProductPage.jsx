import React from "react";
import { useEffect } from "react";
import { FetchProduct, getHealth } from "../Redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [elem, setElem] = useState(12);
  const health = useSelector((store) => store.productReducer.health);
  const [searchParams] = useSearchParams()
  const location = useLocation();



  useEffect(() => {
    let paramObj= {
      params:{
        category: searchParams.getAll('category')
      }
    }
    dispatch(getHealth(paramObj));

  }, [location.search]);

  const loadMore = () => {
    setElem(elem + 8);
};

  let slicedData = health?.slice(0, elem);
  return (
    <div>
      <ProdWrap>
        {health.length > 0 &&
          slicedData.map((el) => {
            return <ProductCard key={el.id} shoeId={el} />;
          })}

      </ProdWrap>
      <button
       onClick={() => loadMore()}
       style={{
        border: "1px solid black",
        width:"200px",padding: "10px",
        marginTop:"20px",
        borderRadius:"5px",
        color:"white",
        backgroundColor:"rgba(0,0,0)"
      }}
       >Load more</button>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;


`;

const ProdWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  gap: 30px;
  margin-top: 40px;
`;

export default ProductPage;
