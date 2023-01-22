import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./Product.css";
import './Search.css'
import { ProductCard } from "../Components/ProductCard";
import { FetchProduct } from "../Redux/ProductReducer/action";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [elem,setElem] = useState(18);

  useEffect(() => {
    FetchProduct("")
      .then((res) => {
        setData(res.data);
      })
      .catch((er) => {
        console.log("err:", er);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    FetchProduct(query)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const loadMore = () => {
    setElem(elem + 8);
  };

  let slicedData = data?.slice(0, elem);
  return (
    <div className="Searchbox">
      <form onClick={handleSearch}>
        <input
          type="text"
          placeholder="Search by Products & brands"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>search</button>
      </form>
      <SearchWrap>
        {slicedData.map((el) => {
          return <ProductCard key={el.id} shoeId={el} />;
        })}
      </SearchWrap>
      <button
       onClick={() => loadMore()}
       style={{
        border: "1px solid black",
        width:"200px",padding: "10px",
        marginTop:"20px",
        borderRadius:"5px",
        color:"white",
        backgroundColor:"rgba(0,0,0)"
      }}
       >Load more</button>
    </div>
  );
};

const SearchWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 80%;
  margin: auto;
  gap: 30px;
  margin-top: 40px;
`;

export default Search;
