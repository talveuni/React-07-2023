import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import config from "../../data/config.json"

function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const {t} = useTranslation();
  const [idUnique, setIdUnique] = useState();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || [])) // null || []
    fetch(config.productsUrl)
      .then(res => res.json())
      .then(data => setProducts(data || [])) 
  }, []);

  const addNew = () => {
    if (idRef.current.value === "") {
      toast.error(t("id-empty")); 
      return;
    } 

     if (nameRef.current.value === "") {
      toast.error(t("product-name-empty")); 
      return;
    } 

    const priceValue = parseFloat(priceRef.current.value);
    if (isNaN(priceValue) || priceValue <= 0) {
      toast.error(t("product-price-zero")); 
      return;
    } 

    if (imageRef.current.value.includes(" ")) {
      toast.error(t("space-in-img-url")); 
      return;
    } 
    
      products.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
        active: activeRef.current.checked,
      });
      console.log(priceRef.current.value)
    fetch(config.productsUrl, {method: "PUT", body: JSON.stringify(products)})
      .then(() => toast.success(t("product-added")));
  };

  const checkIdUniqueness = () => {
    const result = products.filter(product => product.id === Number(idRef.current.value));
    if (result.length === 0) {
      setIdUnique(true);
    } else {
      setIdUnique(false);
    }
  }

  return (
    <div>
      <br />
      {idUnique === false &&  <div>{t("id-not-unique")}!</div>} <br />
      <label>{t("id")}</label> <br />
      <input onChange={checkIdUniqueness} ref={idRef} type="number" /> <br /> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text" /> <br /> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} type="number" /> <br /> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} type="text" /> <br /><br />
      <label>{t("category")}</label> <br />
      <select ref={categoryRef}> {categories.map((category, index) => 
        <option key={index}>
          {t(category.name)} 
        </option>)}
      </select> <br /> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} type="text" /> <br /><br />
      <label>{t("active")}</label> 
      <input ref={activeRef} type="checkbox" /> <br /><br />
      
      <Button disabled={idUnique===false} onClick={addNew} variant="success">{t("add")} </Button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default AddProduct;
