import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Product from "./Product";
import Search from './Search'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/health" element={
        <Product />
        }/>
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
