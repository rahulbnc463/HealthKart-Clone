import React from "react";
import { Box, Image, Button, Img, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import "./AllProduct.css";
import Pagination from "./Pagination";
import { getProduct } from "./getProduct";
import AdminNav from "./AdminNav";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);

  const toast = useToast();
  const toastIdRef = React.useRef();

  function deleteToast() {
    toastIdRef.current = toast({ description: "Deleted !" });
  }

  const deleteProduct = async (id) => {
    let res = await axios.delete(`http://localhost:8080/Health/${id}`);

    getProduct().then((res) => {
      setData(res);
      setLoading(false);
    });
    deleteToast();
  };

  useEffect(() => {
    getProduct().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <AdminNav />
      <div>
        {loading ? (
          <Image
            m="auto"
            src="https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp?cid=ecf05e47vsyotdrdsu37e9gb8ii3ipx3o4lbode9ydpvqe0x&rid=giphy.webp&ct=g"
            alt="Loading"
          />
        ) : (
          <div className="all-product">
            {currentPost.map((el) => {
              return (
                <SingleProduct
                  key={el.id}
                  category={el.category}
                  image={el.image}
                  price={el.price}
                  Title={el.title}
                  oldprice={el.oldprice}
                  handleDelete={() => deleteProduct(el.id)}
                />
              );
            })}
          </div>
        )}
      </div>
      <Pagination
        totalPost={data.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AllProduct;
