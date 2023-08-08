import React, { useEffect, useRef, useState } from "react";
//import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import config from "../../data/config.json"



function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbproducts, setDbProducts] = useState([]);
  const {t} = useTranslation();
  const searchRef = useRef();

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res=>res.json())
      .then(data=>{
        setProducts(data || []);
        setDbProducts(data || [])
      })
  }, []);

  const deleteProduct = (product) => {
    const index = dbproducts.findIndex((p) => p.id === product.id);
    dbproducts.splice(index, 1);
    //setDbProducts(dbproducts.slice());
    searchFromProducts();
    toast.success(t("deleted-from-products", { productName: product.name }));
  };

  const searchFromProducts = () => {
    const result = dbproducts.filter(product => 
      product.name.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.description.toLowerCase().includes(searchRef.current.value.toLowerCase()) ||
      product.id.toString().includes(searchRef.current.value))
    setProducts(result);
  }

  return (
    <div>
      <br />
      <label>{t("search")}:</label><br />
      <input ref={searchRef} onChange={searchFromProducts} type= "text" /> <br /><br />
      <div> {t("total")}: {products.length} {t("pc")}</div> <br />
     
      {products.map((product) => (
        <div key ={product.id}>
          <img src={product.image} alt="" />
          <div>{t("id")}: {product.id}</div>
          <div>{t("name")}: {product.name}</div>
          <div>{t("price")}: {product.price} €</div>
          <div>{t("category")}: {product.category}</div>
          <div>{t("description")}: {product.description}</div>
          <div>{product.active}</div>
          <Button as={Link} to= {"/admin/edit-product/"+ product.id} variant = "warning" >{t("edit")}</Button> <span></span>
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
