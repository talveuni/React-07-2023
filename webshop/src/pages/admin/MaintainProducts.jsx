import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import config from "../../data/config.json"
import "../../css/MaintainProducts.css"
import SortButtons from "../../components/home/SortButtons";
import FilterButtons from "../../components/home/FilterButtons";

function MaintainProducts() {
  const [products, setProducts] = useState([]);
  const [dbProducts, setDbProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const {t} = useTranslation();
  const searchRef = useRef();

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

  const deleteProduct = (product) => {
    const index = dbProducts.findIndex((p) => p.id === product.id);
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice())
    fetch(config.productsUrl, {
      method: "PUT", //asendamine
      body: JSON.stringify(dbProducts)
    })
    searchFromProducts();
    toast.success(t("deleted-from-products", { productName: product.name }));
  };

  const searchFromProducts = () => {
    const result = dbProducts.filter(product => 
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
     
      <table>
        <thead>
          <th></th>
          <th>{t("id")}</th>
          <th>{t("name")}</th>
          <th>{t("price")}</th>
          <th>{t("category")}</th>
          <th>{t("description")}</th>
        </thead>
        <tbody>
        {products.map((product) => (
        <tr className={product.active === true ? "active": "inactive"} key ={product.id}>
          <td><img src={product.image} alt="" /></td>
          <td>{t("id")}: {product.id}</td>
          <td>{t("name")}: {product.name}</td>
          <td>{t("price")}: {product.price} €</td>
          <td>{t("category")}: {product.category}</td>
          <td>{t("description")}: {product.description}</td>
          <td>
          <Button as={Link} to= {"/admin/edit-product/"+ product.id} variant = "secondary" >{t("edit")}</Button> <span></span>
          <Button onClick={() => deleteProduct(product)} variant="outline-danger">{t("delete")}</Button> 
          </td>
          <br /><br />
        </tr>
      ))}

        </tbody>

      </table>
      

      <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme= 'dark'
    />
    </div>
  );
}

export default MaintainProducts;
