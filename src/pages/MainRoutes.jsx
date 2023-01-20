import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import Product from "./Product";
import Dashboard from "../Admin/Dashboard";
import AllProduct from "../Admin/AllProduct";
import AddProduct from "../Admin/AddProduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/health/:id" element={
        <Product />
        }/>

        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="dashboard/all-product" element={<AllProduct />}></Route>
        <Route path="dashboard/add-product" element={<AddProduct />}></Route>

      </Routes>
    </div>
  );
};

export default MainRoutes;
