import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';
import styles from '../../css/Cart.module.css'
import ParcelMachines from '../../components/cart/ParcelMachines';
import Payment from '../../components/cart/Payment';
import { CartSumContext } from '../../store/CartSumContect';
import { CartProduct } from '../../models/CartProduct';

function Cart() {
  const [cart, setCart] = useState<CartProduct[]>(JSON.parse(localStorage.getItem("cart") || "[]"));
  const {t} = useTranslation();
  const {setCartSum} = useContext(CartSumContext);
  
  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }

  const removeItem = (index: number) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartSum(cartSum());
  }

  const increaseQuantity = (index: number) => {
    cart[index].quantity++;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))
    setCartSum(cartSum());
  }
  const decreaseQuantity = (index: number) => {
    cart[index].quantity--;
    if  (cart[index].quantity === 0) {      //  --> eemaldab, kui kogus läheb 0
      cart.splice(index, 1);
      setCart(cart.slice());
    } 

    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))
    setCartSum(cartSum());
  }

  const cartSum = () => {
        let sum = 0;
        cart.forEach(cartProduct => sum += cartProduct.product.price * cartProduct.quantity);
        return sum.toFixed(2);
      }
  
  return (
    <div>
      <br />
      {cart.map((cartProduct, index: number) =>
      <div className={styles.product} key={index}> 
        <img className={styles.image} src={cartProduct.product.image} alt="" />
        <div className={styles.name}>{cartProduct.product.name}</div>
        <div className={styles.price}>{(cartProduct.product.price.toFixed(2))} € </div>
        <div className={styles.quantity}>
          <img src="/minus.png" className={styles.button} onClick={()=> decreaseQuantity(index)} alt="" />
          <span>{cartProduct.quantity} {t("pc")} </span>
          <img src="/add.png" className={styles.button} onClick={()=> increaseQuantity(index)} alt="" />
        </div>
        <span className={styles.sum}>{(cartProduct.product.price * cartProduct.quantity).toFixed(2)} €</span>
        <img src="/delete.png" className={styles.button} onClick={()=> removeItem(index)} alt="" />
        
       
      </div>
      )}
      <br />
     
      {cart.length > 0 && 
      <div>
        <div>{t("total-sum")}: {cartSum()} €</div> <br />
        <ParcelMachines/>
        <Payment sum = {cartSum()}/>
        <Button onClick={emptyCart} variant="secondary">{t("remove-all")}</Button> <br />
      </div>} 
      
       {cart.length === 0 && <div>{t("empty-cart")}</div>}
    </div>
  )
}

export default Cart