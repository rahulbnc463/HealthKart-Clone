import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../Redux/CartReducer/reducer";
import "./CartItem.css";

const CartItem = ({ id, image, title, price, discount,quantity = 0 }) => {
    console.log((price)*(quantity))
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={image} alt="item" />
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <strong>{price}</strong>
          
        </p>
        <p>{discount}</p>
        <div className="cartItem__incrDec">
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className="cartItem-removeButton"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div>
        <button className="checkout">Proceed To Pay</button>
      </div>
    </div>
  );
};

export default CartItem;
