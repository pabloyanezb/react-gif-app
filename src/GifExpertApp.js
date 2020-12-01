import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState([
    "Akira",
  ]);

  // const handleAdd = () => {
  //   setCategories((cats) => [...cats, "Akira"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />

      {categories.map((category) =>
        <GifGrid 
          category={category} 
          key={category}
        />
      )}
    </>
  );
};

export default GifExpertApp;
