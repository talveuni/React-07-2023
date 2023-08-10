import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json"
import SortButtons from "../../components/home/SortButtons";
import FilterButtons from "../../components/home/FilterButtons";
import Product from "../../components/home/Product";
import { ToastContainer } from "react-toastify";

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
        data = data.filter(product => product.active === true)
        setProducts(data || []);
        setDbProducts(data || [])
      })
  }, []);

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
     
      {products.map((product) => (
        <Product product={product} key={product.id}/>
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
