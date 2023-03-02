import { useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartReducer/reducer";
import "./ProductCard.css";

export const ProductCard = ({ shoeId }) => {
  const dispatch = useDispatch();
  const toast = useToast()
  const { title, price, image, id } = shoeId;
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  const handleAddToCart = () => {
    if(isAuth){
      dispatch(addToCart({ id, title, image, price }));
      toast({
        title: 'Cart',
        description: "Product Added sucessfully",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }
    // else{
    //   toast({
    //     title: 'Cart',
    //     description: "Please Login First",
    //     status: 'Error',
    //     duration: 9000,
    //     isClosable: true,
    //   })
    // }
  }
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
          onClick={handleAddToCart}

        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
