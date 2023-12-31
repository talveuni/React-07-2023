import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import config from "../../data/config.json"
import { Product } from '../../models/Product';

function SingleProduct() {
  const {productId} = useParams();
  const {t} = useTranslation();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true)
  const found = products.find(product => product.id === Number(productId));

  useEffect(() => {
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data =>{ 
        setProducts(data || []); 
        setLoading(false)})
  }, []);

  if(isLoading === true) { 
    return <Spinner variant ="success"/>
   // return <div>{t("loading")}...</div>
  }

  if(found === undefined) {
    return <div>{t("product-not-found")}</div>
  }

  return (
    <div>
       <div key ={found.id}>
          <img className="single-product-img" src={found.image} alt="" />
          <div>{t("id")}: {found.id}</div>
          <div>{t("name")}: {found.name}</div>
          <div>{t("price")}: {found.price} €</div>
          <div>{t("category")}: {found.category}</div>
          <div>{t("description")}: {found.description}</div>
          <div>{found.active}</div>
        </div> 
        <br />
        <Button as={Link as any} to= "/">{t("back")}</Button>
    </div> 
  )
}

export default SingleProduct