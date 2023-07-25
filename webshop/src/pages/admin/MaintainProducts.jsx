import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const {t} = useTranslation();

  const deleteProduct = (product) => {
    const index = productsFromFile.findIndex((p) => p.id === product.id);
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    const toastMessage = t("deleted-from-products", { productName: product.name });
    toast.success(toastMessage);
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key ={product.id}>
          <img src={product.image} alt="" />
          <div>ID: {product.id}</div>
          <div>Name: {product.name}</div>
          <div>Price: {product.price} €</div>
          <div>Category: {product.category}</div>
          <div>Decription: {product.description}</div>
          <div>{product.active}</div>
          <Button as={Link} to= {"/admin/edit-product/"+ product.id} variant = "warning" >{t("edit")}</Button>
          <span></span>
          <Button onClick={() => deleteProduct(product)} variant="danger">{t("delete")}</Button> 
         
         
          <br /><br />
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
