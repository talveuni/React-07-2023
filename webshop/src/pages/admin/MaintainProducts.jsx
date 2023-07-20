import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);

  const deleteProduct = (id) => {
    productsFromFile.splice(id, 1);
    setProducts(productsFromFile.slice());
  };

  return (
    <div>
      {products.map((product, id) => (
        <div>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button onClick={() => deleteProduct(id)}>Kustuta</Button>
        </div>
      ))}
    </div>
  );
}

export default MaintainProducts;
