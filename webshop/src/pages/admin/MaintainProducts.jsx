import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const {t} = useTranslation();

  const deleteProduct = (product) => {
    const index = productsFromFile.map((p) => p.id === product.id);
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    const toastMessage = t("deleted-from-products", { productName: product.name });
    toast.success(toastMessage);
  };

  return (
    <div>
      {products.map((product, id) => (
        <div key ={id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <Button onClick={() => deleteProduct(product)}>{t("delete")}</Button>
        </div>
      ))}

      <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme= 'dark'
    />
    </div>
  );
}

export default MaintainProducts;
