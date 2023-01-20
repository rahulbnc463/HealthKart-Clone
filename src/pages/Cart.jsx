import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const cart = useSelector((store) => store.cartReducer.cart);
  console.log(cart)
  
  return (
    <div>
      <h3>Shopping Cart</h3>
      {cart?.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          discount={item.discount}
        />
      ))}
    </div>
  );
};

export default Cart;
