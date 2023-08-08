import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import config from "../../data/config.json"
import SortButtons from "../../components/SortButtons";
import FilterButtons from "../../components/FilterButtons";

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

  return (
    <div>
      <br />
      <SortButtons 
        products= {products}
        setProducts = {setProducts}
      />

      <FilterButtons
        categories = {categories}
        dbProducts = {dbProducts}
        setProducts = {setProducts}
      />
      <br />

      <div> {t("total")}: {products.length} {t("pc")}</div> <br />
     
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
