import React, {useEffect, useRef, useState} from 'react'
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json"

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const {t} = useTranslation();
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || [])) // null || []
  }, []);

  const addCategory = (event) => {
    if (event.code !== "Enter" && event.type !=="click") { 
      return;
    }
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(config.categoryUrl, {
      method: "PUT", //asendamine
      body: JSON.stringify(categories)
    })
    categoryRef.current.value="";
  }

  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice());
    fetch(config.categoryUrl, {
      method: "PUT", 
      body: JSON.stringify(categories)
    })
  }
  
  return (
    <div>
      <label>{t("category-name")}</label> <br />
      <input onKeyUp={addCategory} ref= {categoryRef} type="text" /> <span></span>
      <button onClick={addCategory}>{t("add")}</button> <br /><br />
      {categories.map((category, index) => 
        <div key={index}>
          {t(category.name)} <span></span>
          <button onClick={()=>deleteCategory(index)}>{t("delete")}</button>
        </div>)}
    </div>
  )
}

export default MaintainCategories