import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Text,
  Input,
  Select,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AdminNav from "./AdminNav";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const toastIdRef = React.useRef();
  const navigate = useNavigate();

  function addToast() {
    toastIdRef.current = toast({ description: "Product Successfully added" });
  }

  const addProduct = async (e) => {
    e.preventDefault();
    setLoading(true);

    const product = {
      image: image,
      title: title,
      category: category,
      price:"₹",price,
      oldprice:"₹",originalPrice,
      detail: details,
    };

    let res = await axios.post("http://localhost:8080/Health", product);
    console.log(res.data);

    setLoading(false);

       addToast();
    navigate("/dashboard/all-product");
  };

  return (
    <>
    <AdminNav/>
    <section>
      {loading ? (
        <h4>Loading......</h4>
      ) : (
        <Box width="80%" m="auto">
          <Text fontSize="2xl">Add Product</Text>
          <form onSubmit={addProduct}>
            <FormControl className="form_group">
              <FormLabel>Product Title</FormLabel>
              <Input
                type="text"
                placeholder="Product Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl className="form_group">
              <FormLabel>Product Image</FormLabel>
              <Input
                type="text"
                placeholder="Product Image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </FormControl>
            <FormControl className="form_group">
              <FormLabel>Product Details</FormLabel>
              <Input
                type="text"
                placeholder="Product Details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />
            </FormControl>
            <Flex>
              <FormControl className="form_group">
                <FormLabel>Product Price</FormLabel>
                <Input
                  type="number"
                  placeholder="Product Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
              <FormControl className="form_group">
                <FormLabel> Product Original Price </FormLabel>
                <Input
                  type="number"
                  placeholder="Product Original Price"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
              </FormControl>
              <FormControl className="form_group">
                <FormLabel>Product Category</FormLabel>
                <Select
                  placeholder="Select Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="protiens">Protiens</option>
                  <option value="gainers">Gainers</option>
                  <option value="omega">Omega</option>
                  <option value="vitamins">Vitamins</option>
                  <option value="multivitamins">Multivitamins</option>
                  <option value="ayurveda">Ayurveda</option>
                  <option value="healthdrink">Health drink</option>
                  <option value="fitness">Fitness</option>
                </Select>
              </FormControl>
            </Flex>
            <Box mt="30px">
              {" "}
              <Button type="submit" colorScheme="blue">
                Button
              </Button>
            </Box>
          </form>
        </Box>
      )}
    </section>
    </>
  );
};

export default AddProduct;
