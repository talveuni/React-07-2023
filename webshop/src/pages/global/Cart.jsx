import React, { useState } from 'react'
//import cartFromFile from "../../data/cart.json"
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));
  const {t} = useTranslation();

  const emptyCart = () => {
    cart.splice(0);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));

  }

  const removeItem = (id) => {
    cart.splice(id, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const addItem = (product) => {
    cart.push(product);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart))

  }

  const calcSum = () => {
    let sum = 0;
    cart.forEach(product => sum += product.price);
    return sum;
  }

  return (
    <div>
      <br />
      {cart.map((product, id) =>
      <div key={id}> 
        {product.name} - {product.price} € <span></span>
        <Button onClick={()=> removeItem(id)} variant="danger">x</Button> <span></span>
        <Button onClick={()=> addItem(product)} variant="success">+</Button>
      </div>
      )}
      <br />

      {cart.length > 0 && 
      <div>
        <div>{t("total-sum")}: {calcSum()} €</div> <br />
        <Button onClick={emptyCart} variant="secondary">{t("remove-all")}</Button>
      </div>} 
      
       {cart.length === 0 && <div>{t("empty-cart")}</div>}
    </div>
  )
}

export default Cart