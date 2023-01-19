import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Product from "./Product";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/health/:id" element={
        <Product />
        }/>
      </Routes>
    </div>
  );
};

export default MainRoutes;
