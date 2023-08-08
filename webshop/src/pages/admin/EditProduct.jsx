import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import productsFromFile from "../../data/products.json";
import { useTranslation } from "react-i18next";
import { Button } from 'react-bootstrap';
import config from "../../data/config.json"

function EditProduct() {
  
  const {productId} = useParams();
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const {t} = useTranslation();
  const [idUnique, setIdUnique] = useState();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true)
  const found = products.find(product => product.id === Number(productId));

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || [])) // null || []

    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data =>{ 
        setProducts(data || []); 
        setLoading(false)})
  }, []);
  
  const edit = () => {
    const index = products.findIndex(product => product.id === Number(productId))
    products[index] = {
      "id": Number(idRef.current.value),
      "image": imageRef.current.value,
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "active": activeRef.current.checked    
    }
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)})
      .then(() => navigate("/admin/maintain-products")); //alles siis liigub edasi, kui saab vastuse
  }

  const checkIdUniqueness = () => {
    if (idRef.current.value === productId) {
      idUnique(true);
      return;
    }
    const result = products.filter(product => product.id === Number(idRef.current.value));
    if (result.length === 0) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  if(isLoading === true) { // if(isLoading) on sama
    return <div>{t("loading")}...</div>
  }

  if(found === undefined) {
    return <div>{t("product-not-found")}</div>
  }

  return (
    <div>
          <br />
          {idUnique === false &&  <div>{t("id-not-unique")}</div>} <br />
          <img src={found.image} alt="" /> <br/>
          <label>{t("id")}: </label> <br />
          <input onChange={checkIdUniqueness}  defaultValue={found.id} ref={idRef} type = "number"/> <br />
          <label>{t("name")}: </label><br />
          <input defaultValue={found.name} ref={nameRef} type = "text"/> <br />
          <label>{t("price")}: </label><br />
          <input defaultValue={found.price} ref={priceRef} type = "number"/> <br />
          <label>{t("image")}: </label><br />
          <input defaultValue={found.image} ref={imageRef} type = "text"/> <br />
          
          <label>{t("category")}</label> <br />
          <select ref={categoryRef} defaultValue= {found.category}> 
            {categories.map(category => 
            <option key={category.name} value={category.name}>
              {t(category.name)} 
            </option>)}
          </select> <br /> 

          <label>{t("description")}: </label><br />
          <input defaultValue={found.description} ref={descriptionRef} type = "text"/> <br />
          <label>{t("active")}: </label><span></span>
          <input defaultChecked={found.active} ref={activeRef} type = "checkbox"/> <br /> <br />
          <Button disabled={idUnique===false} onClick={edit} variant="success">{t("save")}</Button>
          

    </div>
  )
}

export default EditProduct