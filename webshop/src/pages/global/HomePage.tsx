import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json"
import SortButtons from "../../components/home/SortButtons";
import FilterButtons from "../../components/home/FilterButtons";
import Product from "../../components/home/Product";
import { ToastContainer } from "react-toastify";
import styles from '../../css/HomePage.module.css'
import CarouselGallery from "../../components/home/CarouselGallery";
import { Category } from "../../models/Category";
import { Product as ProductModel } from "../../models/Product";


function HomePage() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [dbProducts, setDbProducts] = useState<ProductModel[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const {t} = useTranslation();

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res=>res.json())
      .then((data: Category[])=>setCategories(data || []))

    fetch(config.productsUrl)
      .then(res=>res.json())
      .then((data:ProductModel[])=>{
        data = data.filter(product => product.active === true)
        setProducts(data || []);
        setDbProducts(data || [])
      })
  }, []);

  return (
    <div>
      <br />
      <CarouselGallery />
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
     
      <div className={styles.products}>
        {products.map((product, index) => (
        <Product product={product} key={index}/>
        ))} 
      </div>

        <ToastContainer
        position='bottom-right'
        autoClose={4000}
        theme= 'dark'
        />

    </div>
  );
}
export default HomePage;
