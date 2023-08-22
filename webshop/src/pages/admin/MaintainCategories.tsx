import React, {useEffect, useRef, useState} from 'react'
import { useTranslation } from 'react-i18next';
import config from "../../data/config.json"
import { Button } from 'react-bootstrap';
import { Category } from '../../models/Category';

function MaintainCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const {t} = useTranslation();
  const categoryRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(config.categoryUrl)
      .then(res => res.json())
      .then(data => setCategories(data || [])) // null || []
  }, []);

  const addCategory = (event: any) => {
    if (!categoryRef.current){
      return;
    }
    
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

  const deleteCategory = (index : number) => {
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
      <Button variant='success' onClick={addCategory}>{t("add")}</Button> <br /><br />
      {categories.map((category, index) => 
        <div key={index}>
          {t(category.name)} <span></span>
          <Button variant='outline-danger' onClick={()=>deleteCategory(index)}>{t("delete")}</Button>
        </div>)}
    </div>
  )
}

export default MaintainCategories