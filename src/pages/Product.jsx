import React from "react";
import Navbar from "../Components/Navbar";
import ProductPage from "../Components/ProductPage";

import "./Product.css";

const Product = () => {

  return (
    <>
    
    <Navbar />
    
    <div className="productpage">
      <p>Home &gt; Sports Nutrition &gt; Proteins &gt; WheyProteins</p>
      <div className="Header">
        <div className="Header1">

        </div>
        <div className="Header2">
            <img src="https://img2.hkrtcdn.com/10922/bnr_1092171_o.jpg" alt="" />
            <ProductPage />
        </div>
      </div>
    </div>
    </>
  );
};

export default Product;
