import React from 'react'
import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function SortButtons(props) {
    const {t} = useTranslation();

    const sortAZ = () => {
        props.products.sort((a, b) => a.name.localeCompare(b.name));
        props.setProducts(props.products.slice());
      };
    
      const sortZA = () => {
        props.products.sort((a, b) => b.name.localeCompare(a.name));
        props.setProducts(props.products.slice());
      };
    
      const sortPriceAsc = () => {
        props.products.sort((a, b) => a.price - b.price);
        props.setProducts(props.products.slice());
      };
    
      const sortPriceDesc = () => {
        props.products.sort((a, b) => b.price - a.price);
        props.setProducts(props.products.slice());
      };

  return (
    <div>
        <Button onClick={sortAZ} variant ="secondary">{t("sort-AZ")}</Button> <span></span>
        <Button onClick={sortZA} variant ="secondary">{t("sort-ZA")}</Button> <span></span>
        <Button onClick={sortPriceAsc} variant ="secondary">{t("sort-price-asc")}</Button> <span></span>
        <Button onClick={sortPriceDesc} variant ="secondary">{t("sort-price-desc")}</Button> <br /><br />
    </div>
  )
}

export default SortButtons