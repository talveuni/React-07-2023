import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Tooted() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json.products) || []);
  }, []);

  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <img src={product.thumbnail} alt="" /> <br /><br />
        </div>
      ))}
    </div>
  );
}

export default Tooted;
