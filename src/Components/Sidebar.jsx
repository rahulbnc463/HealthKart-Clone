import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialState = searchParams.getAll("category");

  const [category, setCategory] = useState(initialState || []);

  const handleFilter = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    const params = {
      category,
    };
    setSearchParams(params);
  }, [category]);

  return (
    <div >
      <h2 style={{fontWeight:"bold",fontSize:"15px"}}>Category</h2>
      <div style={{display:"flex",width:"100%"}}>
        <input
          type="checkbox"
          value="proteins"
          onChange={handleFilter}
          checked={category.includes("proteins")}
        />
        <label>Proteins</label>
      </div>
      <div>
        <input type="checkbox"
         value="gainers" 
         onChange={handleFilter}
         checked={category.includes("gainers")}
          />
        <label>Gainers</label>
      </div>
      <div>
        <input type="checkbox"
         value="proteinFood" 
         onChange={handleFilter}
         checked={category.includes("proteinFood")}
          />
        <label>ProteinFood</label>
      </div>
      <div>
        <input type="checkbox"
         value="omega" 
         onChange={handleFilter}
         checked={category.includes("omega")}
          />
        <label>Omega</label>
      </div>
      <div>
        <input type="checkbox"
         value="multivitamins" 
         onChange={handleFilter}
         checked={category.includes("multivitamins")}
          />
        <label>MultiVatamins</label>
      </div>
      <div>
        <input type="checkbox" 
        value="vitamins"
         onChange={handleFilter} 
         checked={category.includes("vitamins")}
         />
        <label>Vitamins</label>
      </div>
      <div>
        <input type="checkbox"
         value="minerals" 
         onChange={handleFilter} 
         checked={category.includes("minerals")}
         />
        <label>Minerals</label>
      </div>
      <div>
        <input type="checkbox" 
        value="ayurveda" 
        onChange={handleFilter} 
        checked={category.includes("ayurveda")}
        />
        <label>Ayurveda</label>
      </div>
      <div>
        <input type="checkbox" 
        value="healthdrink" 
        onChange={handleFilter} 
        checked={category.includes("healthdrink")}
        />
        <label>Healthdrink</label>
      </div>
      <div>
        <input type="checkbox" 
        value="fitness" 
        onChange={handleFilter} 
        checked={category.includes("fitness")}
        />
        <label>Fitness</label>
      </div>
    </div>
  );
};

export default Sidebar;
