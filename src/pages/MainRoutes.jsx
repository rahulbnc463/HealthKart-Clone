import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import Login from './Login'
import Cart from './Cart'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
