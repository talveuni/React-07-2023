import React, { useEffect, useRef, useState } from "react";
import productsFromFile from "../../data/products.json";
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

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || [])) // null || []
  }, []);

  const addNew = () => {
    if (nameRef.current.value === "" || priceRef.current.value < 0) {
      toast.error(t("product-not-added"));
    } else {
      productsFromFile.push({
        id: Number(idRef.current.value),
        image: imageRef.current.value,
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
        active: activeRef.current.checked,
      });
      toast.success(t("product-added"));      
    }
  };

  const checkIdUniqueness = () => {
    const result = productsFromFile.filter(product => product.id === Number(idRef.current.value));
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
