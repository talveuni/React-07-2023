import React, { useEffect, useState } from "react";
//import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import config from "../../data/config.json"


function HomePage() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const {t} = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res=>res.json())
      .then(data=>setCategories(data || []))

    fetch(config.productsUrl)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data || []);
        setDbProducts(data || [])
      })
  }, []);

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

  const addToCart = (productClicked) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const index = cart.findIndex(cartProduct => cartProduct.product.id === productClicked.id); 
    
    if (index >= 0) {
      cart[index].quantity++;
    } else {
      cart.push({"quantity":1, "product": productClicked});
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    toast.success(t("added-to-cart", { productName: productClicked.name }));
  }

  const filterByCategory = (categoryClicked) => {
    const result = dbProducts.filter(product => product.category === categoryClicked);
    setProducts(result);
  }

  return (
    <div>
      <br />
      <Button onClick={sortAZ} variant ="secondary">{t("sort-AZ")}</Button> <span></span>
      <Button onClick={sortZA} variant ="secondary">{t("sort-ZA")}</Button> <span></span>
      <Button onClick={sortPriceAsc} variant ="secondary">{t("sort-price-asc")}</Button> <span></span>
      <Button onClick={sortPriceDesc} variant ="secondary">{t("sort-price-desc")}</Button> <br /><br />
      <div> {t("total")}: {products.length} {t("pc")}</div> <br />

      {categories.map((category, index)=>
        <button key={index} onClick={() => filterByCategory(category.name)}>
          {t(category.name)}
        </button>
      )}
     
      {products.map((product, id) => (
        <div key = {id}>
          <img className="product-img" src={product.image} alt="" />
          <div>{t("name")}: {product.name}</div>
          <div>{t("price")}: {(product.price).toFixed(2)} €</div>
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
