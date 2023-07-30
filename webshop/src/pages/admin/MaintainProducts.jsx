import React, { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const {t} = useTranslation();
  const searchRef = useRef();

  const deleteProduct = (product) => {
    const index = productsFromFile.findIndex((p) => p.id === product.id);
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
    toast.success(t("deleted-from-products", { productName: product.name }));
  };

  const searchFromProducts = () => {
    const result = productsFromFile.filter(product => 
      product.name.toLowerCase().includes(searchRef.current.value.toLowerCase()));
    setProducts(result);
  }

  const filterByCategory = (categoryClicked) => {
    const result = productsFromFile.filter(product => product.category === categoryClicked)
    setProducts(result);
  }

  return (
    <div>
      <br />
      <input ref={searchRef} onChange={searchFromProducts} type= "text" /> <br /><br />
      <div> {t("total")}: {products.length} {t("pc")}</div> <br />
      <button onClick= {()=> filterByCategory("stick vacuum")}>{t("stick-vacuum")}</button>
      <button onClick= {()=> filterByCategory("robot vacuum")}>{t("robot-vacuum")}</button>
      <button onClick= {()=> filterByCategory("camping")}>{t("camping")}</button>
      <button onClick= {()=> filterByCategory("tent")}>{t("tent")}</button> <br /><br />
      
      {products.map((product, index) => (
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
