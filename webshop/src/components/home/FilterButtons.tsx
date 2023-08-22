import React from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';

interface FilterButtonsInterface{
  dbProducts: Product[],
  setProducts: (value: Product[]) => void,
  categories: Category[]
}


function FilterButtons(props: FilterButtonsInterface) {
    const filterByCategory = (categoryClicked: string) => {
        const result = props.dbProducts.filter(product => product.category === categoryClicked);
        props.setProducts(result);
      }
    const {t} = useTranslation();

    const showAll = () => {
        props.setProducts(props.dbProducts.slice());
    }

return (
    <div>
        {props.categories.map((category)=>
        <Button key={category.name} variant='outlined' onClick={() => filterByCategory(category.name)}>
          {t(category.name)}
        </Button>
      )}
      <Button onClick={showAll}>{t("show-all")}</Button>
    </div>
  )
}

export default FilterButtons