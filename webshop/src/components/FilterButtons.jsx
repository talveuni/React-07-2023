import React from 'react'
import { useTranslation } from 'react-i18next';


function FilterButtons(props) {
    const filterByCategory = (categoryClicked) => {
        const result = props.dbProducts.filter(product => product.category === categoryClicked);
        props.setProducts(result);
      }
    const {t} = useTranslation();

    const showAll = () => {
        props.setProducts(props.dbProducts.slice());
    }

return (
    <div>
        {props.categories.map((category, index)=>
        <button key={index} onClick={() => filterByCategory(category.name)}>
          {t(category.name)}
        </button>
      )}
      <button onClick={showAll}>{t("show-all")}</button>
    </div>
  )
}

export default FilterButtons