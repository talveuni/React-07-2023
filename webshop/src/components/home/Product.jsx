import React, { useContext } from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../../store/CartSumContect';
import styles from '../../css/HomePage.module.css'


function Product({product}) {
    const {t} = useTranslation();
    const {setCartSum} = useContext(CartSumContext);

    const addToCart = (productClicked) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const index = cart.findIndex(cartProduct => cartProduct.product.id === productClicked.id); 
        
        if (index >= 0) {
          cart[index].quantity++;
        } else {
          cart.push({"quantity":1, "product": productClicked});
        }      
        localStorage.setItem("cart", JSON.stringify(cart))
        let sum = 0;
        cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
        setCartSum(sum.toFixed(2));
        toast.success(t("added-to-cart", { productName: productClicked.name })); 
    }

  return (
    <div className={styles.product}>
        <div>
          <img className="product-img" src={product.image} alt="" />
          <div>{t("name")}: {product.name}</div>
          <div>{t("price")}: {(product.price).toFixed(2)} €</div>
          <Button onClick={()=>addToCart(product)} variant="success">{t("add-to-cart")}</Button> <span></span>
          <Button as={Link} to= {"/product/"+ product.id} variant="info">{t("details")} </Button> 
         <br />
        </div>
    </div>
  )
}

export default Product