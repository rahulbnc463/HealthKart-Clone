import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartReducer/reducer";
import "./ProductCard.css";

export const ProductCard = ({ shoeId }) => {
  const dispatch = useDispatch();
  const { title, price, image, id } = shoeId;
  return (
    <div className="Product">
      <div className="productimage">
        <img src={shoeId.image} alt="title" />
      </div>
      <div className="productdesc">
        <p>{shoeId.title}</p>
        <p>{shoeId.category}</p>
        <div className="price">
          <p>{shoeId.price}</p>
          <p>{shoeId.oldprice}</p>
          <p>{shoeId.discount}</p>
        </div>
      </div>
      <div className="probtn">
        <button
          onClick={() => {
            dispatch(addToCart({ id, title, image, price }));
            
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
