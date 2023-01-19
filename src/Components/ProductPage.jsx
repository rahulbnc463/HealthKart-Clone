import React from "react";
import { useEffect } from "react";
import { getHealth } from "../Redux/ProductReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "./ProductCard";
import styled from "styled-components";

const ProductPage = () => {
  const dispatch = useDispatch();
  const health = useSelector((store) => store.productReducer.health);
  console.log(health);

  useEffect(() => {
    dispatch(getHealth());
  }, []);

  return (
    <Wrapper>
      <ProdWrap>
        {health.length > 0 &&
          health.map((el) => {
            return <ProductCard key={el.id} shoeId={el} />;
          })}
      </ProdWrap>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
`;


const ProdWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 20px;
  width: 100%;
  margin: auto;
  margin-top: 40px;
  
`;

export default ProductPage;
