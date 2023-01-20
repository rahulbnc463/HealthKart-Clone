 
 import axios from "axios";
 
 export  const getProduct = async () => {
    let res = await axios.get("http://localhost:8080/Health");
    return res.data;
  };