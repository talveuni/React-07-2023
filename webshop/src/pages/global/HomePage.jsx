import React, { useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import cartFromFile from "../../data/cart.json"
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

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
    cartFromFile.push(product);
    const toastMessage = t("added-to-cart", { productName: product.name });
    toast.success(toastMessage);

  }

  return (
    <div>
      <button onClick={sortAZ}>{t("sort-AZ")}</button>
      <button onClick={sortZA}>{t("sort-ZA")}</button>
      <button onClick={sortPriceAsc}>{t("sort-price-asc")}</button>
      <button onClick={sortPriceDesc}>{t("sort-price-desc")}</button>
      {products.map((product, id) => (
        <div key = {id}>
          <img src={product.image} alt="" />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <Button onClick={()=>addToCart(product)}>{t("add-to-cart")}</Button>
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
