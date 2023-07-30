import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
//import cartFromFile from "../../data/cart.json"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);
  const {t} = useTranslation();

  const sortAZ = () => {
    products.sort((a, b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  };

  const sortZA = () => {
    products.sort((a, b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  };

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  const addToCart = (product) => {
   // cartFromFile.push(product);
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success(t("added-to-cart", { productName: product.name }));
  }

  return (
    <div>
      <br />
      <Button onClick={sortAZ} variant ="secondary">{t("sort-AZ")}</Button> <span></span>
      <Button onClick={sortZA} variant ="secondary">{t("sort-ZA")}</Button> <span></span>
      <Button onClick={sortPriceAsc} variant ="secondary">{t("sort-price-asc")}</Button> <span></span>
      <Button onClick={sortPriceDesc} variant ="secondary">{t("sort-price-desc")}</Button> <br /><br />
     
      {products.map((product, id) => (
        <div key = {id}>
          <img className="product-img" src={product.image} alt="" />
          <div>{t("name")}: {product.name}</div>
          <div>{t("price")}: {product.price} €</div>
          <Button onClick={()=>addToCart(product)} variant="success">{t("add-to-cart")}</Button> <span></span>
          <Button as={Link} to= {"/product/"+ product.id} variant="info">{t("details")}</Button> 
         <br /><br /><br />
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

export default HomePage;
