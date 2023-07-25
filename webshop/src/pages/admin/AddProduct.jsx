import React, { useRef } from "react";
import productsFromFile from "../../data/products.json";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";




function AddProduct() {
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const {t} = useTranslation();

  const addNew = () => {
    if (nameRef.current.value === "" || priceRef.current.value < 0) {
      toast.error("Tühja väärtusega toodet ei saa lisada");
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
      toast.success("jess");
      console.log (nameRef.current.value)
    }
  };

  return (
    <div>
      <label>{t("id")}</label> <br />
      <input ref={idRef} type="number" /> <br /> <br />
      <label>{t("name")}</label> <br />
      <input ref={nameRef} type="text" /> <br /> <br />
      <label>{t("price")}</label> <br />
      <input ref={priceRef} type="number" /> <br /> <br />
      <label>{t("image")}</label> <br />
      <input ref={imageRef} type="text" /> <br /><br />
      <label>{t("category")}</label> <br />
      <input ref={categoryRef} type="text" /> <br /> <br />
      <label>{t("description")}</label> <br />
      <input ref={descriptionRef} type="text" /> <br /><br />
      <label>{t("active")}</label> 
      <input ref={activeRef} type="checkbox" /> <br /><br />
      
      <Button onClick={addNew} variant="success">{t("add")} </Button>
      <ToastContainer position="bottom-right" autoClose={4000} theme="dark" />
    </div>
  );
}

export default AddProduct;
